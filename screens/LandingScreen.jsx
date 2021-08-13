import React from 'react';
import { Button, SafeAreaView, View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Sign In"
        onPress={() => navigation.navigate('Signin')}
        style={styles.button}
      />
      <CustomButton
        title="Sign Up"
        onPress={() => navigation.navigate('Signup')}
        style={[styles.button, styles.mainButton]}
      />
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
