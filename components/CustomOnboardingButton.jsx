import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomOnboardingButton({ title, onPress, style, ...otherProps }) {
  return (

        <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...otherProps}>
            <Text style={styles.text}>{title}</Text>
          </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    color: '#111',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    padding: 12,
  },
});
