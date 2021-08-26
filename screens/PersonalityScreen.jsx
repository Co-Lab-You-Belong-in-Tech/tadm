import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';



export default function PersonalityScreen({ navigation }) {

    function handleSubmit () {
        
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1 }}>
            <Intro
                title="Describe yourself" description="Select all that apply"
            />
            <View style={styles.buttons}>
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
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                onPress={() => name && navigation.navigate('Interests')}
                style={[styles.mainButton]}
                />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        borderWidth: .5,
        borderRadius: 30,
        padding: 4,
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 10,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
        marginLeft: 15,
    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      padding: 12,
    },
    mainButton: {
        borderRadius: 60,
        marginRight: 20,
        marginBottom: 50,
        width: 63,
        fontSize: 20,
        alignSelf: 'flex-end'
      },
  });