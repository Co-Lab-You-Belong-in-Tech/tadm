import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, Text } from 'react-native';
import Intro from '../../components/Intro';
import InputField from '../../components/InputField';
import CustomOnboardingButton from '../../components/CustomOnboardingButton';
import { db } from '../../utils/firebase';
import useCurrentUser from '../../hooks/useCurrentUser';
import { useSelector, useDispatch } from 'react-redux'

const goals = [
  'Get a job',
  'Improve a skill',
  'Network with peers',
  'Explore a hobby',
  'Get more done',
]

export default function EditMainGoal({ navigation, route }) {
  const { currentUser } = useCurrentUser();
  
    function handleSubmit (goal) {
      db.collection('users')
      .doc(currentUser.uid)
      .update({ mainGoal: goal })
      .catch(console.log)
      navigation.goBack()
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
          <Text style={styles.title}>What is the main goal you are trying to achieve?</Text>
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
    title: {
      fontWeight: 'bold',
      fontSize: 28,
      marginTop: 10,
      marginBottom: 10,
    },
  });