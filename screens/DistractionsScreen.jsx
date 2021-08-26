import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import CustomOnboardingButton from '../components/CustomOnboardingButton';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';
import TV from '../assets/DistractionIcons/Component19.png'
import VideoGames from '../assets/DistractionIcons/Component20.png'
import SocialMedia from '../assets/DistractionIcons/Component21.png'
import Emails from '../assets/DistractionIcons/Component22.png'
import Multitasking from '../assets/DistractionIcons/Component23.png'
import Texting from '../assets/DistractionIcons/Component24.png'
import TVSelected from '../assets/DistractionIcons/Component19selected.png'
import VideoGamesSelected from '../assets/DistractionIcons/Component20selected.png'
import SocialMediaSelected from '../assets/DistractionIcons/Component21selected.png'
import EmailsSelected from '../assets/DistractionIcons/Component22selected.png'
import MultitaskingSelected from '../assets/DistractionIcons/Component23selected.png'
import TextingSelected from '../assets/DistractionIcons/Component24selected.png'

const data = [
    'television', 'videoGames', 'socialMedia', 
    'emails', 'multitasking', 'texting',
]

const imports = [
    [TV, TVSelected],
    [VideoGames, VideoGamesSelected],
    [SocialMedia, SocialMediaSelected],
    [Emails, EmailsSelected],
    [Multitasking, MultitaskingSelected],
    [Texting, TextingSelected],
]

export default function DistractionsScreen({ navigation, route }) {
    const [distractions, setDistractions] = useState(data.map(name => ({ name, selected: false }) ))
    const { email, uid } = route.params

    function handlePress (distraction, idx) {
        setDistractions ( () => {
            const newDistractions = distractions.slice()
            newDistractions[idx].selected = !distractions[idx].selected
            return newDistractions
        })
    }

    function handleSubmit () {
        if (!distractions.filter(item => item.selected).length) return
        const selectedDistractions = distractions.filter(distraction => distraction.selected).map(item => item.name)
        db.collection('users')
        .doc(uid)
        .update({ distractions: selectedDistractions })
        .catch(console.log)
        navigation.navigate('MainGoal', { email, uid })
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1 }}>
            <Intro
                title="What are your biggest distractors?" description="Select all that apply"
            />
            <View style={styles.buttons}>
                {distractions.map((distraction, idx) => <TouchableOpacity key={idx} style={[styles.button]} onPress={() => handlePress(distraction, idx) }>
                    <Image
                        style={styles.images}
                        source={!distraction.selected ? imports[idx][0] : imports[idx][1]}
                    />
                </TouchableOpacity>)}
            </View>
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                style={[styles.mainButton]}
                />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    images: {
        width: 122,
        resizeMode: 'contain',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    button: {
        marginBottom: 40,
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