import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Intro from '../components/Intro';
import CustomIconButton from '../components/CustomIconButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';
import ImagePicker from '../components/ImagePicker';

// const uid = 'aYKecbOHBWevWf2PNw6csQkFbE62'
// const email = 'blah'

export default function ProfilePicScreen({ navigation, route }) {
    const [image, setImage] = useState(null)
    const { email, uid } = route.params
    
    return (
        <View style={{ backgroundColor: 'white', padding: 30, flex: 1, }}>
            <Intro
                title="What do you look like?" description="Please add a photo of yourself so that other participants will know who you are."
            />
            <ImagePicker uid={uid} image={image} setImage={setImage} />
            <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <CustomIconButton
                title="➔"
                onPress={() => navigation.navigate('Distractions', { email, uid })}
                style={[styles.mainButton]}
                />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      borderBottomWidth: 3,
      padding: 10,
      marginTop: 20,
      fontSize: 20,
    },
    button: {
        alignSelf: 'center',
        marginTop: 20,
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