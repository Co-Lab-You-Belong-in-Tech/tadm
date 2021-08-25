import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProfileImage from '../assets/ProfilePicture.png'

export default function CustomImagePicker({image, setImage}) {
  
  async function checkPermissions () {
    let result = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(result)
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity style={[styles.button]} onPress={pickImage}>
      {<Image source={image ? { uri: image } : ProfileImage} style={{ width: 200, height: 200, borderRadius: 100, }} />}
      </TouchableOpacity>

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