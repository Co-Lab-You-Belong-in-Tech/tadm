import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { ScrollView, View, StyleSheet, Text, Button, Image } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import CustomIconButton from '../components/CustomIconButton';
import CustomBubbleButton from '../components/CustomBubbleButton';
import Intro from '../components/Intro';
import { db } from '../utils/firebase';
const usersRef = db.collection('users');

export default function ViewBuddyProfile({ navigation }) {
  const { currentUser } = useCurrentUser();
  const profile = useSelector(state => state.buddyProfile.value)

  return <ScrollView style={{ backgroundColor: 'white', padding: 30, paddingTop: 10, flex: 1, }}>
    <View style={{ display: 'flex', alignItems: 'center', alignSelf: 'center' }}>
      <Image source={{ uri: profile.uri }} style={{ width: 200, height: 200, borderRadius: 100, borderWidth: 3, }} />
      <Text style={styles.title}>{profile.name}</Text>
    </View>
    <View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <Text style={styles.header}>Bio</Text>
    </View>
    <Text style={styles.bio}>{profile.bio}</Text>
    </View>
    <View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <Text style={styles.header}>Main Goal</Text>
    </View>
    <Text style={styles.body}>{profile.mainGoal}</Text>
    </View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
      <Text style={styles.header}>Interests</Text>
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
