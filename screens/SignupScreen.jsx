import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import { CheckBox } from 'react-native-elements';
import * as yup from 'yup';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from '../utils/firebase';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import PasswordInput from '../components/PasswordInput';
import Intro from '../components/Intro';

const defaultFormValues = {
  email: '',
  password: '',
  tos: false,
};

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required().min(6),
  tos: yup.boolean().oneOf([true], 'Accept Terms & Conditions is required'),
});

export default function SignupScreen({ navigation }) {
  const [createUserWithEmailAndPassword, registereduser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: defaultFormValues,
    validationSchema,
    onSubmit: (values) => {
      createUserWithEmailAndPassword(values.email, values.password);
    },
  });

  useEffect(() => {
    if (registereduser?.user) {
      createUserProfileDocument(registereduser.user);
      const { email, uid } = registereduser.user;
      navigation.navigate('Gender', { email, uid });
    }
  }, [registereduser?.user]);

  if (error?.message) {
    Alert.alert(error.message);
    error.message = '';
  }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Intro title="Let’s get started!" description="Create an account so we can get you matched" />
      <InputField
        label="Email"
        value={values.email}
        onChangeText={handleChange('email')}
        type="emailAddress"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <PasswordInput
        value={values.password}
        onChangeText={handleChange('password')}
        type="newPassword"
        autoCompleteType="password"
      />
      <View style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Already have an account?{'  '}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={{textDecorationLine: 'underline'}}>Log in</Text> 
        </TouchableOpacity>
      </View>
      <CheckBox
        title="I agree to the Terms of Service"
        checked={values.tos}
        checkedColor="gray"
        uncheckedColor="gray"
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkboxText}
        onPress={() => handleChange('tos')({ target: { value: !values.tos } })}
      />
      <CustomButton onPress={handleSubmit} title="Sign Up" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  intro: {
    marginTop: 60,
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  checkboxText: { fontWeight: '400' },
  button: {
    marginBottom: 100,
  }
});

/*
I learned how to build a mobile app, learned how to use the firebase database, learned user authentication, and how to use redux toolkit for global state management.  I also learned how to work with other product organization partners.

*/