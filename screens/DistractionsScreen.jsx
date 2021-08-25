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


export default function DistractionsScreen({ navigation }) {
    const [distractions, setDistractions] = useState({
        television: false, 
        videoGames: false, 
        socialMedia: false, 
        emails: false,
        multitasking: false,
        texting: false,
    })

    function handleSubmit (distraction) {
        setDistractions( () => {
            const newObj = Object.assign({}, distractions)
            newObj[distraction] = !distractions[distraction]
            return newObj
        }
        )
    }

    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1 }}>
            <Intro
                title="What are your biggest distractors?" description="Select all that apply"
            />
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button]} onPress={() => handleSubmit('television') }>
                    <Image
                        style={styles.images}
                        source={!distractions.television ? TV : TVSelected}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => handleSubmit('videoGames') }>
                    <Image
                        style={styles.images}
                        source={!distractions.videoGames ? VideoGames : VideoGamesSelected}
                    />             
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => handleSubmit('socialMedia') }>
                    <Image
                        style={styles.images}
                        source={!distractions.socialMedia ? SocialMedia : SocialMediaSelected}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => handleSubmit('emails') }>
                    <Image
                        style={styles.images}
                        source={!distractions.emails ? Emails: EmailsSelected}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => handleSubmit('multitasking') }>
                    <Image
                        style={styles.images}
                        source={!distractions.multitasking ? Multitasking: MultitaskingSelected}
                    />                 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => handleSubmit('texting') }>
                    <Image
                        style={styles.images}
                        source={!distractions.texting ? Texting: TextingSelected}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                onPress={() => navigation.navigate('MainGoal')}
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