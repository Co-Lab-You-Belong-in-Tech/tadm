import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';

const preferences = [
  'Similar goals',
  'Similar personality',
  'Gender',
  'Timezone',
  'No preference',
]

export default function PreferencesScreen({ navigation, route }) {
  const { email, uid } = route.params
  const { setCurrentUser } = useCurrentUser();

  function handleSubmit (preference) {
    setCurrentUser({ uid, email });
    db.collection('users')
    .doc(uid)
    .update({ preference })
    .catch(console.log)
    navigation.navigate('Goals', { email, uid })
  }

  return (
      <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
          <Intro
              title="Alright, let us know how you would like to be matched!" 
              description="Please select your top preference"
          />
          {preferences.map(preference => <CustomOnboardingButton 
            style={styles.button} 
            title={preference}
            key={preference}
            onPress={() => handleSubmit(preference)} 
            />)}
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