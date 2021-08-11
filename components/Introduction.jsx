import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
export default function Introduction({ navigation }) {
  const [values, setValues] = useState({
    name: '',
    introduction: '',
  });

  const handleChange = (name) => (value) => {
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handlePress = () => {
    navigation.navigate('Goal');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Enter your first name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Your name"
        value={values.name}
        onChangeText={handleChange('name')}
      />
      <Text style={styles.name}>Please introduce yourself to your accountability peer</Text>
      <TextInput
        style={styles.multilineInput}
        multiline={true}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Let your partner know a little about yourself"
        value={values.introduction}
        onChangeText={handleChange('introduction')}
      />
      <Button style={styles.button} onPress={handlePress} title="Next" />
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
  name: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
