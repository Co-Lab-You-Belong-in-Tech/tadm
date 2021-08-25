import React, { useRef } from 'react';
import { Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function InputField({ label, type, ...inputProps }) {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable style={styles.container} onPress={focusInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={inputRef}
        style={styles.field}
        textContentType={type || 'none'}
        {...inputProps}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
  },
  label: {
    fontSize: 14,
    color: 'gray',
  },
  field: {
    marginTop: 5,
  },
});
