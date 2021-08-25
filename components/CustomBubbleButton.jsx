import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import  { LinearGradient } from 'expo-linear-gradient'

export default function CustomBubbleButton({ title, onPress, style, selected, ...otherProps }) {
  return (

        <TouchableOpacity  onPress={onPress} {...otherProps}>

              <LinearGradient
                colors={selected ? ['#FFECA8', '#FF929C', '#E69BFF' ] : ["white", "white", "white"]} 
                locations={[0, 0.6, 1]}
                style={[styles.button, style]}
              >
              <Text style={styles.text}>{title}</Text>
              </LinearGradient>

          </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    color: '#111',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    padding: 12,
  },
});
