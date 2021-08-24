import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function PronounsScreen({ navigation }) {

    function handleSubmit () {
      navigation.navigate('Personality')
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
        <Intro
            title="Select your pronouns" description="Please select one below"
        />
        <CustomOnboardingButton style={styles.button} title="He/Him" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="She/Her" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="They/Them" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="He/They" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="She/They" onPress={handleSubmit} />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFD7D7',
      borderWidth: .5,
      borderRadius: 10,
      width: '100%',
      color: '#111',
      padding: 10,
      marginBottom: 15,
      marginTop: 5,

    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      padding: 12,
    },
  });