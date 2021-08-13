import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
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
      navigation.navigate('Profile', { email, uid });
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
      />
      <PasswordInput
        value={values.password}
        onChangeText={handleChange('password')}
        type="newPassword"
      />
      <CheckBox
        title="I agree to the Terms of Service"
        checked={values.tos}
        checkedColor="gray"
        uncheckedColor="gray"
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkboxText}
        onPress={() => handleChange('tos')({ target: { value: !values.tos } })}
      />
      <CustomButton onPress={handleSubmit} title="Sign Up" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  checkboxText: { fontWeight: '400' },
});
