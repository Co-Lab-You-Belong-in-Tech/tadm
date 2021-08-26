import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomBubbleButton from '../components/CustomBubbleButton';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';

const data = [
    'Reading', 'Television', 'Music', 'Gardening', 'Fishing', 
    'Video Games', 'Walking', 'Golf', 'Shopping', 'Traveling', 
    'Cards', 'Eating', 'Writing', 'Running', 'Volunteering', 
    'Dancing', 'Biking', 
]

export default function InterestsScreen({ navigation, route }) {
    const [interests, setInterests] = useState(data.map(name => ({ name, selected: false }) ))

    const { uid, email } = route.params

    function handlePress () {
        if (!interests.filter(item => item.selected).length) return
        const selectedInterests = interests.filter(interest => interest.selected).map(item => item.name)
        db.collection('users')
        .doc(uid)
        .update({ interests: selectedInterests })
        .catch(console.log)
        navigation.navigate('ProfilePic', { email, uid })
    }

    function handleSelect (interest, idx) {
        setInterests( () => {
            const newInterests = interests.slice()
            newInterests[idx].selected = !interests[idx].selected
            return newInterests
        })
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1 }}>
            <Intro
                title="What are your interests?" description="Select all that apply"
            />
            <View style={styles.buttons}>
                {interests.map((interest, idx) => <CustomBubbleButton
                key={idx}
                title={data[idx]}
                onPress={() => handleSelect(interest, idx)}
                style={[styles.button]}
                selected={interest.selected}
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

