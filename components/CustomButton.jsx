import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress, ...otherProps }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...otherProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    width: '100%',
    color: '#111',
    padding: 10,
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    padding: 12,
  },
});
