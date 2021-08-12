import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';

const defaultFormValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required().min(6),
});

export default function SignupScreen({ navigation }) {
  const currentUser = useCurrentUser();

  if (currentUser) {
    navigation.navigate('Home');
  }

  const [createUserWithEmailAndPassword, registereduser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: defaultFormValues,
    validationSchema,
    onSubmit: (values) => {
      createUserWithEmailAndPassword(values.email, values.password);
    },
  });

  if (error?.message) {
    Alert.alert(error.message);
    error.message = '';
  }

  // if (user) {
  //   createUserProfileDocument(user?.user)
  //     .then(() => navigation.navigate('Welcome'))
  //     .catch((err) => console.error(err));
  // }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        value={values.email}
        onChangeText={handleChange('email')}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry
      />
      <Button onPress={handleSubmit} style={styles.button} title="REGISTER" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: 'gray',
    textAlign: 'left',
    borderRadius: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    color: '#111',
    padding: 10,
  },
});
