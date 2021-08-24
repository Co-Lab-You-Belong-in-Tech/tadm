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
                title="What are your interests?" description="Select all that apply"
            />
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Reading</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Television</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Music</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Gardening</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Fishing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Video Games</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Walking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Golf</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Traveling</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Eating</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Writing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Running</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Volunteering</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Dancing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
                    <Text style={styles.text}>Biking</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                onPress={() => name && navigation.navigate('Distractions')}
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