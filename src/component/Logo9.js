import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function Logo() {
  return <Image source={require('../assets/person2.jpg')} style={{
    height:scale(45),
    width: scale(45),
    borderRadius:scale(20),
    marginRight:15,
    }} />
}