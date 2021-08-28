import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TextInput } from 'react-native';
import Intro from '../components/Intro';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';




export default function NameScreen({ navigation, route }) {
    const [name, setName] = useState('')
    const { uid, email } = route.params;

    function handlePress () {
        if (!name) return
        db.collection('users')
        .doc(uid)
        .set({ name, email })
        .catch(console.log)
        navigation.navigate('Bio', { email, uid })
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1, }}>
            <Intro
                title="Let's start with the basics" description="What's your name?"
            />
            <TextInput
                label="Your Name"
                value={name}
                onChangeText={(text) => setName(text)}
                autoCorrect={false}
                style={styles.input}
                placeholder="Your name"
            />
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                onPress={handlePress}
                style={[styles.mainButton]}
                />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      borderBottomWidth: 3,
      padding: 10,
      marginTop: 20,
      fontSize: 20,
    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      padding: 12,
    },
    mainButton: {
        borderRadius: 60,
        marginRight: 20,
        marginBottom: 50,
        width: 63,
        fontSize: 20,
        alignSelf: 'flex-end'
      },
  });