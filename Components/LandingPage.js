import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import { UserContext } from '../UserContext'
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAcyoSzVe1dYiRd1R5Qi4PcEoCPBolIx1w",
    authDomain: "accountabilitychat.firebaseapp.com",
    projectId: "accountabilitychat",
    storageBucket: "accountabilitychat.appspot.com",
    messagingSenderId: "244358230230",
    appId: "1:244358230230:web:1091a330a8f84a934f9977",
    measurementId: "G-H5T20N7YRP"
  }
  
  if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
  }
  
const db = firebase.firestore()
const usersRef = db.collection('users')

export default function LandingPage( {navigation} ) {
    const [email, setEmail] = useState('')
    const {value, setValue} = useContext(UserContext)

    // useEffect ( () => {
    //     usersRef.doc(value.email).get().then( res => {
    //         setValue(res.data())
    //     })
    // }, [])

    async function handlePress () {


        usersRef.doc(email).get().then( res => {

            if (res.exists && res.data().email && res.data().goal && res.data().introduction && res.data().name) {
                navigation.navigate('HomePage')
                setValue(res.data())
            } else {
                navigation.navigate('NameAndIntroduction')
                setValue({email})
                usersRef.doc(email).set({
                    email
                })
            }

        })
    }

        // messagesRef.get().then(res => {
        //     res.forEach(doc => {
        //         console.log(doc.data())
        //     })
        // })
        return <View style={styles.container}>
            <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} placeholder="Enter your email" value={email} onChangeText={setEmail} />
            <Button onPress={handlePress} title="Get Started" />
        </View>
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
})