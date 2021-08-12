import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function InputField({ label, ...inputProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.field} {...inputProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
  },
  field: {
    marginTop: 5,
  },
});
