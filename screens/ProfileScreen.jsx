import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useFormik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import * as yup from 'yup';
import Intro from '../components/Intro';
import InputField from '../components/InputField';
import ImagePicker from '../components/ImagePicker';
import CustomButton from '../components/CustomButton';
import { db } from '../utils/firebase';
import useCurrentUser from '../hooks/useCurrentUser';

const initialValues = {
  name: '',
  bio: '',
  goal: '',
  occupation: '',
  gender: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string().required(),
  goal: yup.string().required(),
});

export default function ProfileScreen({ route }) {
  const { setCurrentUser } = useCurrentUser();
  const [image, setImage] = useState(null);
  const { uid, email } = route.params;
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      db.collection('users')
        .doc(uid)
        .set(values, { merge: true })
        .then(() => {
          setCurrentUser({ uid, email });
        })
        .catch(console.log);
    },
  });

  return (
    <ScrollView style={{ backgroundColor: 'white', padding: 20 }}>
      <Intro
        title="Complete your profile"
        description="Kindly complete your profile so we can understand and serve you better"
      />
      <View>
        <ImagePicker image={image} setImage={setImage} />
      </View>
      <InputField
        label="Your Name"
        value={values.name}
        onChangeText={handleChange('name')}
        autoCapitalize="words"
      />
      <InputField
        label="Brief Bio"
        value={values.bio}
        onChangeText={handleChange('bio')}
        autoCapitalize="sentences"
        multiline
      />
      <InputField label="Your Goal" value={values.goal} onChangeText={handleChange('goal')} />
      <InputField
        label="Occupation"
        value={values.occupation}
        onChangeText={handleChange('occupation')}
        multiline
      />

      <Picker selectedValue={values.gender} onValueChange={handleChange('gender')}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Non-binary" value="non-binary" />
      </Picker>
      <CustomButton title="Update Profile" onPress={handleSubmit} />
    </ScrollView>
  );
}
