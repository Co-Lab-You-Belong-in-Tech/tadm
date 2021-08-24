import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function PersonalityScreen({ navigation }) {

    function handleSubmit () {
        
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 30 }}>
        <Intro
            title="Select your pronouns" description="Please select one below"
        />
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Quiet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Confident</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Friendly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Mean</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Loud</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Easy-Going</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Clever</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Polite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Happy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Intelligent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Boring</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Sarcastic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Impulsive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Sensitive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Clever</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style]} onPress={handleSubmit}>
            <Text style={styles.text}>Modest</Text>
        </TouchableOpacity>

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