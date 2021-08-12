import React, { useState } from 'react';
import { View } from 'react-native';
import { useFormik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import * as yup from 'yup';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import ImagePicker from '../components/ImagePicker';

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  gender: '',
  occupation: '',
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  displayName: yup.string().required(),
  firstName: yup.string().oneOf(['m', 'f', 'n']),
});

export default function ProfileScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const { handleChange, handleSubmit, values } = useFormik({ initialValues, validationSchema });

  return (
    <View style={{ backgroundColor: 'white', padding: 20 }}>
      <Intro
        title="Complete your profile"
        description="Kindly complete your profile so we can understand and serve you better"
      />
      <View>
        <ImagePicker image={image} setImage={setImage} />
      </View>
      <InputField
        label="First Name"
        value={values.firstName}
        onChangeText={handleChange('firstName')}
      />
      <InputField
        label="Last Name"
        value={values.lastName}
        onChangeText={handleChange('lastName')}
      />
      <InputField
        label="Display Name"
        value={values.displayName}
        onChangeText={handleChange('displayName')}
      />
      <InputField
        label="Occupation"
        value={values.occupation}
        onChangeText={handleChange('occupation')}
      />

      <Picker selectedValue={values.gender} onValueChange={handleChange('gender')}>
        <Picker.Item label="Male" value="m" />
        <Picker.Item label="Female" value="f" />
        <Picker.Item label="Non-binary" value="n" />
      </Picker>
    </View>
  );
}
