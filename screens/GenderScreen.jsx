import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function GenderScreen({ navigation }) {


    function handleSubmit () {
        navigation.navigate('Pronouns')
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
        <Intro
            title="Select your gender" description="Please select one below"
        />
        <CustomOnboardingButton style={styles.button} title="Male" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Female" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Non-Binary" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Trans-Male" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Trans-Female" onPress={handleSubmit} />
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