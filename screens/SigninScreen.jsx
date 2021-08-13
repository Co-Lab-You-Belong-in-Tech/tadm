import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { StyleSheet, View, Text, Alert } from 'react-native';
import * as yup from 'yup';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '../components/CustomButton';
import { auth } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';

const defaultFormValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required().min(6),
});

export default function SigninScreen({ navigation }) {
  const { setCurrentUser } = useCurrentUser();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: defaultFormValues,
    validationSchema,
    onSubmit: (values) => {
      signInWithEmailAndPassword(values.email, values.password);
    },
  });

  useEffect(() => {
    if (user?.user) {
      const { uid, email } = user.user;
      setCurrentUser({ email, uid });
    }
  }, [user]);

  if (error?.message) {
    Alert.alert(error.message);
    error.message = '';
  }

  return (
    <View style={styles.container}>
      <InputField
        label="Email"
        value={values.email}
        onChangeText={handleChange('email')}
        type="emailAddress"
        autoCapitalize="none"
      />
      <PasswordInput
        value={values.password}
        onChangeText={handleChange('password')}
        type="password"
      />
      <Text>
        Don't have an account yet?{' '}
        <Text onPress={() => navigation.navigate('Signup')} style={styles.link}>
          Register
        </Text>
      </Text>
      <CustomButton onPress={handleSubmit} title="Sign In" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: 'gray',
    textAlign: 'left',
    borderRadius: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    width: 100,
  },
  link: {
    fontWeight: 'bold',
  },
});
