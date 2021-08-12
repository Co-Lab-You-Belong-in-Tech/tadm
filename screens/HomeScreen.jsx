import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import { db } from '../utils/firebase';
const usersRef = db.collection('users');

function getDate(offset) {
  let today = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - offset);
  return yesterday.toLocaleDateString();
}

const goalDates = [6, 5, 4, 3, 2, 1, 0].map((item) => getDate(item));

export default function HomeScreen({ navigation }) {
  const currentUser = useCurrentUser();
  const [profile, setProfile] = useState({});
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    const unsubscribe = usersRef.doc(currentUser.uid).onSnapshot((res) => {
      setProfile(res.data());
    });
    return () => unsubscribe();
  }, []);

  function handlePress(date) {
    // setProfile({...profile, goalHistory: [...goalHistory, date]})
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.aboveTopText}>Weekly Goal </Text>
      <View style={styles.top}>
        <Text style={styles.topText}> {profile?.goal || 'insert goal here'} </Text>
        <View style={styles.topView}>
          {goalDates.map((item, idx) => (
            <View key={idx} style={styles.topViews}>
              <Button
                style={styles.touchable}
                title={item.split('/')[0] + '/' + item.split('/')[1]}
                onPress={() => handlePress(item)}>
              </Button>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.middle}>
        <Text style={styles.middleText}>Break your goal into smaller pieces. </Text>
      </View>

      <Text style={styles.aboveBottomText}>Partner's Weekly Goal </Text>
      <View style={styles.bottom}>
        <View style={styles.bottomUnMatched}>
          <Text style={styles.bottomUnMatchedText}>Waiting to match... </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require('../assets/chat_bubble_outline.png')}></Image>
        </View>
        <View style={styles.bottom}></View>
        <View style={styles.footerItem}>
          <Text style={styles.goal}> </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 15,
    flex: 0.3,
    flexDirection: 'row',
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    margin: 20,
    flex: 1,
    height: 90,
    borderRadius: 45,
  },
  top: {
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 15,
    flex: 0.7,
  },
  topView: {
    marginTop: 70,
    width: 20,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topViews: {
    display: 'flex',
    backgroundColor: '#f1f1f1',
    width: 50,
    height: 50,
    borderRadius: 30,
    margin: 2,
    justifyContent: 'center',
  },
  touchable: {
    width: 100,
    height: 100,
    color: 'black',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    margin: 20,
    borderRadius: 15,
    flex: 0.3,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    flex: 0.9,
  },
  bottomUnMatched: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1d1d',
    color: 'white',
    borderRadius: 15,
    width: 400,
    flex: 0.5,
  },
  bottomUnMatchedText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
  aboveTopText: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  topText: {
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  middleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  aboveBottomText: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  bottomText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
