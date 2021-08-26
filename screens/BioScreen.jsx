import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TextInput } from 'react-native';
import Intro from '../components/Intro';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function BioScreen({ navigation }) {
    [name, setName] = useState('')

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1, }}>
            <Intro
                title="Tell us a bit about yourself" description="What would you like your partner to know about you?"
            />
            <TextInput
                label="Your Name"
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize="words"
                style={styles.input}
                placeholder="Description"
                multiline
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                onPress={() => name && navigation.navigate('Pronouns')}
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
      fontSize: 16,
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