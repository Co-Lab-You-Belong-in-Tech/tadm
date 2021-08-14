import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import { db } from '../utils/firebase';
const usersRef = db.collection('users');

export default function ViewProfile({ navigation }) {
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

  return <>
    <Button onPress={() => navigation.goBack()} title="Edit Profile"></Button>
    <View style={styles.headerText}>
        <Text>Your Goal</Text>
    </View>
    <View style={styles.goal}>
        <Text>{profile.goal}</Text>
    </View>
    <View style={styles.headerText}>
        <Text>Your Bio</Text>
    </View>
    <View style={styles.bio}>
        <Text>{profile.bio}</Text>
    </View>
    <View style={styles.headerText}>
        <Text>Your Occupation</Text>
    </View>
    <View style={styles.occupation}>
        <Text>{profile.occupation}</Text>
    </View>
    <View style={styles.headerText}>
        <Text>Your Gender</Text>
    </View>
    <View style={styles.gender}>
        <Text>{profile.gender}</Text>
    </View>
  </>
}

const styles = StyleSheet.create({
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
