import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TextInput } from 'react-native';
import Intro from '../../components/Intro';
import CustomButton from '../../components/CustomButton';
import { db } from '../../utils/firebase';
import useCurrentUser from '../../hooks/useCurrentUser';
import { useSelector, useDispatch } from 'react-redux'



export default function EditBio({ navigation, route }) {
    const [bio, setBio] = useState('')
    const { currentUser } = useCurrentUser();

    function handlePress () {
        console.log(currentUser.uid)
        if (!bio) return
        db.collection('users')
        .doc(currentUser.uid)
        .update({ bio })
        .catch(console.log)
        navigation.navigate('ViewProfile')
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1, }}>
            <Intro
                title="Tell us a bit about yourself" description="What would you like your partner to know about you?"
            />
            <TextInput
                label="Your Bio"
                value={bio}
                onChangeText={(text) => setBio(text)}
                autoCapitalize="words"
                style={styles.input}
                placeholder="Description"
                multiline
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomButton
                title="Save"
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
        marginBottom: 50,
        fontSize: 20,
        alignSelf: 'flex-end'
      },
  });