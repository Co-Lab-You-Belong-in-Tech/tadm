import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function PreferencesScreen({ navigation, route }) {
  const { email, uid } = route.params

  function handleSubmit () {
    navigation.navigate('Goals')
  }

  return (
      <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
          <Intro
              title="Alright, let us know how you would like to be matched!" 
              description="Please select your top preference"
          />
          <CustomOnboardingButton style={styles.button} title="Similar goals" onPress={handleSubmit} />
          <CustomOnboardingButton style={styles.button} title="Similar personality" onPress={handleSubmit} />
          <CustomOnboardingButton style={styles.button} title="Gender" onPress={handleSubmit} />
          <CustomOnboardingButton style={styles.button} title="Timezone" onPress={handleSubmit} />
          <CustomOnboardingButton style={styles.button} title="No preference" onPress={handleSubmit} />
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
      fontWeight: 'normal'

    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      padding: 12,
    },
  });