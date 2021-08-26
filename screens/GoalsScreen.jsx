import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TextInput } from 'react-native';
import Intro from '../components/Intro';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function GoalsScreen({ navigation, route }) {
    const { email, uid } = route.params
    const [name, setName] = useState('')

    function handlePress () {
        if (!name) return
        db.collection('users')
        .doc(uid)
        .update({ goal: name })
        .catch(console.log)
        navigation.navigate('Preferences', { email, uid })
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1, }}>
            <Intro
                title="What would you like to accomplish right now?" description="In a sentence or two, describe your most important priority for the week"
            />
            <TextInput
                label="Your Name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
                placeholder="Description"
                multiline
                autoCapitalize='none'
                autoCorrect={false}
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