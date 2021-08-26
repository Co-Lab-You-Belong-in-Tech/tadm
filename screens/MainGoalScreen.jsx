import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';

const goals = [
  'Get a job',
  'Improve a skill',
  'Network with peers',
  'Explore a hobby',
  'Get more done',
]

export default function MainGoalScreen({ navigation, route }) {
  const { email, uid } = route.params
  
    function handleSubmit (goal) {
      db.collection('users')
      .doc(uid)
      .update({ mainGoal: goal })
      .catch(console.log)
      navigation.navigate('Goals', { email, uid })
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
          <Intro
              title="Let's talk about goals" description="What is the main thing you are trying to achieve?"
          />
          {goals.map(goal => <CustomOnboardingButton 
            style={styles.button} 
            title={goal}
            key={goal}
            onPress={() => handleSubmit(goal)} 
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

    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      padding: 12,
    },
  });