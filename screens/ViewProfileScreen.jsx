import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { ScrollView, View, StyleSheet, Text, Button, Image } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import CustomIconButton from '../components/CustomIconButton';
import CustomBubbleButton from '../components/CustomBubbleButton';
import ProfileImage from '../assets/ProfilePicture.png'
import Intro from '../components/Intro';
import { db } from '../utils/firebase';
const usersRef = db.collection('users');

const defaultProfile = 'https://yt3.ggpht.com/-2lcjvQfkrNY/AAAAAAAAAAI/AAAAAAAAAAA/ouxs6ZByypg/s900-c-k-no/photo.jpg'

export default function ViewProfile({ navigation }) {
  const { currentUser } = useCurrentUser();
  const profile = useSelector(state => state.profile.value)

  return <ScrollView style={{ backgroundColor: 'white', padding: 30, paddingTop: 10, flex: 1, }}>
    <Button onPress={() => navigation.navigate('ViewBuddyProfile')} title="Edit"></Button>
    <View style={{ display: 'flex', alignItems: 'center', alignSelf: 'center' }}>
      <Image source={profile.uri ? { uri: profile.uri } : {uri: defaultProfile}} style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 3, }} />
      <Text style={styles.title}>{profile.name}</Text>
    </View>
    <View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <Text style={styles.header}>Bio</Text>
      <Button onPress={() => navigation.navigate('EditBio')} title="Edit"></Button>
    </View>
    <Text style={styles.bio}>{profile.bio}</Text>
    </View>
    <View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <Text style={styles.header}>Main Goal</Text>
      <Button onPress={() => navigation.navigate('EditMainGoal')} title="Edit"></Button>
    </View>
    <Text style={styles.body}>{profile.mainGoal}</Text>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <Text style={styles.header}>Interests</Text>
      <Button onPress={() => navigation.navigate('EditInterests')} title="Edit"></Button>
    </View>
    <View style={styles.buttons}>
      {profile.interests.slice(0,3).map((interest, idx) => <CustomBubbleButton
        key={idx}
        title={interest}
        style={[styles.button]}
        selected={true}
        />)}
    </View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <Text style={styles.header}>Personality</Text>
      <Button onPress={() => navigation.navigate('EditPersonality')} title="Edit"></Button>
    </View>
    <View style={styles.buttons}>
      {profile.personalities.slice(0,3).map((personality, idx) => <CustomBubbleButton
        key={idx}
        title={personality}
        style={[styles.button]}
        selected={true}
        />)}
    </View>
    <View style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 10,
    marginBottom: 5,
  },
  body: {
    fontSize: 22,
  },
  bio: {
    fontSize: 17,
  },
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
    paddingTop: 1,
    paddingBottom: 1,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    marginRight: 15,
},
});
