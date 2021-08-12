import React, { useRef } from 'react';
import { Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function PasswordField({ label, value, onChangeText, type, ...inputProps }) {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable style={styles.container} onPress={focusInput}>
      <Text style={styles.label}>{label || 'Password'}</Text>
      <TextInput
        ref={inputRef}
        style={styles.field}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry
        textContentType={type || 'passport'}
        {...inputProps}
      />
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
