import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import { db } from '../utils/firebase';
import ProfileImage from '../assets/ProfilePicture.png'

import config from '../config';

const firebaseInstance =
  firebase.apps.length === 0 ? firebase.initializeApp(config.firebase) : firebase;

export default function CustomImagePicker({image, setImage, uid}) {
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImageAsync(result.uri, uid).then(res => {
        db.collection('users')
        .doc(uid)
        .update({ uri: res })
        .catch(console.log)
      })
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


export async function uploadImageAsync(uri, uid) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref().child(uid);
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}