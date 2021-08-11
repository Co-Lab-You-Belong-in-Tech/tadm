import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';

export default function Goal({ navigation }) {
  const [goal, setGoal] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.goal}>What is your #1 goal to accomplish this week? </Text>
      <TextInput
        style={styles.multilineInput}
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Make it specific and measurable"
        value={goal}
        onChangeText={setGoal}
      />
      <Button style={styles.button} onPress={() => navigation.navigate('Home')} title="Finish" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: 'gray',
    textAlign: 'center',
  },
  multilineInput: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: 'gray',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
  },
  goal: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
