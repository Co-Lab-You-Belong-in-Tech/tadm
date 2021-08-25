import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function PersonalityScreen({ navigation }) {

    function handleSubmit () {
        
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30 }}>
        <Intro
            title="Select your pronouns" description="Please select one below"
        />
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Quiet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Confident</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Friendly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Mean</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Loud</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Easy-Going</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Clever</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Polite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Happy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Intelligent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Boring</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Sarcastic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Impulsive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Sensitive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Clever</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>Modest</Text>
        </TouchableOpacity>

        </View>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderWidth: .5,
        borderRadius: 30,
        padding: 10,
        marginBottom: 15,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      padding: 12,
    },
  });