import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { View, StyleSheet, Text, Button } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import { db } from '../utils/firebase';
const usersRef = db.collection('users');

export default function ViewProfile({ navigation }) {
  const { currentUser } = useCurrentUser();
  const profile = useSelector(state => state.profile.value)

  return <>
    <Button onPress={() => navigation.goBack()} title="Edit Profile"></Button>
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Bio</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyText}>{profile.bio}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Weekly Goal</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyText}>{profile.goal}</Text>
        </View> 
      </View>

      <View style={styles.section}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Occupation</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyText}>{profile.occupation}</Text>
        </View>
      </View>
    </View>
  </>
}

const styles = StyleSheet.create({
  section: {
    borderRadius: 10,
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
    padding: 20,
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    borderRadius: 10,
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 25,
    marginBottom: 50,
  },
});
