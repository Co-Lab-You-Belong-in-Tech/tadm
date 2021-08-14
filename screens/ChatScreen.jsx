import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import CustomButton from '../components/CustomButton';
import useCurrentUser from '../hooks/useCurrentUser';
import { db } from '../utils/firebase';
const usersRef = db.collection('messages');
const firestore = firebase.firestore();
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Chat({ navigation }) {
  const { currentUser } = useCurrentUser();
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(50);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  async function sendMessage () {


    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      currentUser,
    })

    setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (<>
    <View>

      {messages && messages.map(msg => {
        return <View>
        <ChatMessage key={msg.id} message={msg} />
        </View>
      })
      }

      <Text ref={dummy}></Text>

    </View>


    <View style={styles.input} >
      <TextInput placeholder="useless placeholder" value={formValue} onChangeText={text => setFormValue(text)} />
      <TouchableOpacity style={{marginLeft: 180,}} onPress={sendMessage} title="Send">
        <Text>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  </>)
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    marginLeft: 20,
    borderColor: 'gray',
    textAlign: 'center',
    position: 'absolute',
    bottom: 100,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    width: '70%'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    borderRadius: 10,
    padding: 20,
  },
  mainButton: {
    backgroundColor: 'gray',
  },
});

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  return (<>
    <View>
      <Image source={'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <Text>{text}</Text>
    </View>
  </>)
}
