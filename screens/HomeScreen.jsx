import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import useCurrentUser from '../hooks/useCurrentUser';
import randomQuote from '../utils/quotes';
import { db } from '../utils/firebase';
const usersRef = db.collection('users');

function getDate(offset) {
  let days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  let today = new Date();
  let toDate = new Date();
  toDate.setDate(today.getDate() - offset);
  return { date: toDate.toLocaleDateString(), day: days[toDate.getDay()] }
}

const goalDates = [6, 5, 4, 3, 2, 1, 0].map((item) => getDate(item));

export default function HomeScreen({ navigation }) {
  const { currentUser } = useCurrentUser();
  const [profile, setProfile] = useState({});
  const [buddyProfile, setBuddyProfile] = useState({});
  const date = new Date().toLocaleDateString();

  useLayoutEffect(() => {
    const unsubscribe = usersRef.doc(currentUser?.uid).onSnapshot((res) => {
      const data = res.data();
      setProfile(data);
      if (data?.buddyId) {
        usersRef
          .doc(data.buddyId)
          .get()
          .then((res) => {
            setBuddyProfile(res.data());
          });
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {}, [profile]);

  function handlePress(date) {
    usersRef
      .doc(currentUser.uid)
      .get()
      .then((res) => {
        if (!res.data().goalHistory) {
          setProfile({ ...profile, goalHistory: [date] });
          usersRef.doc(currentUser.uid).update({
            goalHistory: [date],
          });
        } else if (res.data().goalHistory.find((item) => item === date)) {
          setProfile({
            ...profile,
            goalHistory: profile.goalHistory.filter((item) => item !== date),
          });
          usersRef.doc(currentUser.uid).update({
            goalHistory: res.data().goalHistory.filter((item) => item !== date),
          });
        } else {
          setProfile({ ...profile, goalHistory: [...profile.goalHistory, date] });
          usersRef.doc(currentUser.uid).update({
            goalHistory: [...res.data().goalHistory, date],
          });
        }
      })
      .catch(console.log);
  }

  let matched = Object.keys(buddyProfile || {}).length;

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={styles.topText}>Goal of the Week </Text>
        <Text style={styles.topTextSecond}> {profile?.goal || 'insert goal here'} </Text>
        <View style={styles.topView}>
          {goalDates.map((item, idx) => (<View key={idx} style={styles.checkboxContainer}>
                <Text style={{color: '#FFABAB'}}>
                  {item.day}
                </Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {item.date.split('/')[1]}
                </Text>
            <View  style={styles.topViews}>
              <TouchableOpacity
                style={[styles.touchable, profile?.goalHistory?.includes(item.date) && styles.completed]}
                onPress={() => handlePress(item.date)}>
              </TouchableOpacity>
            </View>
          </View>))}
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middleText}>Do the one thing that would make you satisfied with your day</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>{buddyProfile?.name || 'Partner'}'s Goal of the Week </Text>
        {matched ? <Text style={styles.bottomTextSecond}> {buddyProfile.goal} </Text> : <View style={matched ? styles.bottomMatched : styles.bottomUnMatched}>
          <Text style={matched ? styles.bottomMatchedText : styles.bottomUnMatchedText}>
            {'Waiting to match...'}{' '}
          </Text>
        </View>}
        <View style={styles.topView}>
          {goalDates.map((item, idx) => (<View key={idx} style={styles.checkboxContainer}>
                <Text style={{color: '#FFABAB'}}>
                  {item.day}
                </Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {item.date.split('/')[1]}
                </Text>
            <View key={idx} style={styles.topViews}>
              <TouchableOpacity
                style={[styles.touchable, buddyProfile?.goalHistory?.includes(item.date) && styles.buddyCompleted]}>
              </TouchableOpacity>
            </View>
          </View>))}
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
    backgroundColor: 'black',
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    borderRadius: 15,
    marginTop: 20,
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
    backgroundColor: 'black',
    borderRadius: 30,
    margin: 8,
    marginTop: 4,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  completed: {
    backgroundColor: 'green',
    borderRadius: 30,
  },
  buddyCompleted: {
    backgroundColor: 'orange',
    borderRadius: 30,
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  touchable: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  touchableText: {
    color: '#FFABAB',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFABAB',
    margin: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 15,
    flex: 0.2,
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    flex: 0.7,
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
  bottomMatched: {
    alignItems: 'flex-start',
    flex: 0.5,
  },
  bottomUnMatchedText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
  bottomMatchedText: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: 'white',
  },
  topText: {
    fontWeight: 'bold',
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  topTextSecond: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    alignSelf: 'stretch',
    flex: .4,
  },
  bottomText: {
    fontWeight: 'bold',
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  bottomTextSecond: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    alignSelf: 'stretch',
    flex: .4,
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
  homeImg: {
    resizeMode: 'contain',
  },
});
