import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TextInput } from 'react-native';
import Intro from '../components/Intro';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function NameScreen({ navigation }) {
    [name, setName] = useState('')

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 30, flex: 1, }}>
            <Intro
                title="Let's start with the basics" description="What's your name?"
            />
            <TextInput
                label="Your Name"
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize="words"
                style={styles.input}
                placeholder="Your name"
            />
            <CustomIconButton
            title="➔"
            onPress={() => navigation.navigate('Pronouns')}
            style={[styles.mainButton]}
            />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      borderBottomWidth: 3,
      padding: 10,
      marginTop: 20,
      flex: 1,

    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      padding: 12,
    },
    mainButton: {
        borderRadius: 60,
        marginTop: 60,
        marginRight: 40,
        width: 63,
        fontSize: 20,
        alignSelf: 'flex-end'
      },
  });