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
    backgroundColor: '#FFD7D7',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    color: '#111',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    padding: 12,
  },
});
