import React, { useRef } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';

export default function InputField({ label, ...inputProps }) {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable style={styles.container} onPress={focusInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput ref={inputRef} style={styles.field} {...inputProps} />
    </Pressable>
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