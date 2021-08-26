import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Intro({ title, description }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.intro}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 15,
    marginTop: 40,
  },
  intro: {
    marginBottom: 25,
    fontSize: 18,
  },
});
