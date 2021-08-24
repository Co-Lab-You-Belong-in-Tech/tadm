import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import  { LinearGradient } from 'expo-linear-gradient'
import MaskedView from "@react-native-masked-view/masked-view";

export default function CustomIconButton({ title, onPress, style, ...otherProps }) {
  return (

        <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...otherProps}>
            <MaskedView
              style={{ height: 43, justifyContent: 'center' }}
              maskElement={<Text style={styles.text}>{title}</Text>}
            >
              <LinearGradient
                colors={['#FFECA8', '#FF929C', '#E69BFF' ]} 
                locations={[0, 0.6, 1]}
                style={{ flex: 1 }}
              />
            </MaskedView>
          </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    width: '100%',
    color: '#111',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    padding: 7,
  },
});
