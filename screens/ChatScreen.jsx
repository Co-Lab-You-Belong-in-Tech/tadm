import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Chat({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    borderRadius: 10,
    padding: 20,
  },
  mainButton: {
    backgroundColor: 'gray',
  },
});
