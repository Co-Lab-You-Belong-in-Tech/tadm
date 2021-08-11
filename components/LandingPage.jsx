import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { db } from '../utils/firebase';

const usersRef = db.collection('users');

export default function LandingPage({ navigation }) {
  const [email, setEmail] = useState('');
  const { value, setValue } = useContext(UserContext);

  // useEffect ( () => {
  //     usersRef.doc(value.email).get().then( res => {
  //         setValue(res.data())
  //     })
  // }, [])

  async function handlePress() {
    usersRef
      .doc(email)
      .get()
      .then((res) => {
        if (
          res.exists &&
          res.data().email &&
          res.data().goal &&
          res.data().introduction &&
          res.data().name
        ) {
          navigation.navigate('HomePage');
          setValue(res.data());
        } else {
          navigation.navigate('NameAndIntroduction');
          setValue({ email });
          usersRef.doc(email).set({
            email,
          });
        }
      });
  }

  // messagesRef.get().then(res => {
  //     res.forEach(doc => {
  //         console.log(doc.data())
  //     })
  // })
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button onPress={handlePress} title="Get Started" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: 'gray',
    textAlign: 'center',
  },
});
