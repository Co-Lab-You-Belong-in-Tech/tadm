import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function MainGoalScreen({ navigation }) {

    function handleSubmit () {
      navigation.navigate('Goals')
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
        <Intro
            title="Let's talk about goals" description="What is the main thing you are trying to achieve?"
        />
        <CustomOnboardingButton style={styles.button} title="Get a job" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Improve a skill" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Network with peers" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Explore a hobby" onPress={handleSubmit} />
        <CustomOnboardingButton style={styles.button} title="Get more done" onPress={handleSubmit} />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
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