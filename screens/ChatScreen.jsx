import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import useCurrentUser from '../hooks/useCurrentUser';
import { db } from '../utils/firebase';
const usersRef = db.collection('users');
const messagesRef = db.collection('chats');

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);
  const { currentUser } = useCurrentUser();
  const [profile, setProfile] = useState({});
  const [buddyProfile, setBuddyProfile] = useState({});

  useEffect(() => {
    const unsubscribe = usersRef.doc(currentUser?.uid).onSnapshot((res) => {
      const data = res.data();
      setProfile(data);
      if (data?.buddyId) {
        usersRef
          .doc(data.buddyId)
          .get()
          .then((res) => {
            setBuddyProfile(res.data());
          });
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = messagesRef.orderBy('createdAt', 'desc').onSnapshot((res) => {
      setMessages(
        res.docs.filter(doc => {
          return doc.data().user._id === currentUser.uid || doc.data().user._id === profile.buddyId
        }).map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      )
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user } = messages[0]
    db.collection('chats').add({
      _id,
      createdAt, 
      text,
      user
    })
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: currentUser?.uid,
        name: profile?.name
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
