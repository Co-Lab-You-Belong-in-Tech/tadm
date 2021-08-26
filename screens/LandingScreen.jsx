import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import  { LinearGradient } from 'expo-linear-gradient'
import MaskedView from "@react-native-masked-view/masked-view";
import CustomButton from '../components/CustomButton';
import CustomIconButton from '../components/CustomIconButton';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{height: 300, resizeMode: "contain", margin: 20, marginBottom: 100, marginTop: 80}}
        source={{uri: "https://images.unsplash.com/photo-1629432933158-9215d6c0c894?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"}}  
      ></Image>
      <MaskedView
        style={{ height: 60, justifyContent: 'center' }}
        maskElement={<Text style={styles.title}>AccountaPal</Text>}
      >
        <LinearGradient
          colors={['#FFDCA7', '#F35060', '#BF00FF' ]} 
          locations={[ 0, 0.28, 1]}
          style={{ flex: 1 }}
        />
      </MaskedView>
      <Text style={styles.subTitle}>Your webwide community of tech people working on their goals while helping you with yours.</Text>
      <CustomIconButton
        title="➔"
        onPress={() => navigation.navigate('Signup')}
        style={[styles.mainButton]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 37,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
  },
  mainButton: {
    borderRadius: 60,
    marginTop: 60,
    marginRight: 40,
    width: 63,
    fontSize: 20,
    alignSelf: 'flex-end'
  },
});
