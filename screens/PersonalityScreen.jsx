import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomBubbleButton from '../components/CustomBubbleButton';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';

const data = [
    'Active','Quiet','Confident','Friendly','Mean','Loud'  
     ,'Easy-Going','Clever', 'Polite','Happy','Intelligent',
     'Patient','Boring','Sarcastic',  'Impulsive','Sensitive','Clever','Modest'
]

const uid = '04GoKU4E8rezCO8CgFFtuykROGi1'
const email = 'z@g.gcom'

export default function PersonalityScreen({ navigation, route }) {
    const [personalities, setPersonalities] = useState(data.map(name => ({ name, selected: false }) ))

    // const { uid, email } = route.params

    function handlePress () {
        if (!personalities.filter(item => item.selected).length) return
        const selectedPersonalities = personalities.filter(personality => personality.selected).map(item => item.name)
        db.collection('users')
        .doc(uid)
        .update({ personalities: selectedPersonalities })
        .catch(console.log)
        navigation.navigate('Interests', { email, uid })
    }

    function handleSelect (personality, idx) {
        setPersonalities( () => {
            const newPersonalities = personalities.slice()
            newPersonalities[idx].selected = !personalities[idx].selected
            return newPersonalities
        })
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1 }}>
            <Intro
                title="Describe yourself" description="Select all that apply"
            />
            <View style={styles.buttons}>
                {personalities.map((personality, idx) => <CustomBubbleButton
                key={idx}
                title={data[idx]}
                onPress={() => handleSelect(personality, idx)}
                style={[styles.button]}
                selected={personality.selected}
                />)}
            </View>
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                onPress={handlePress}
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





  