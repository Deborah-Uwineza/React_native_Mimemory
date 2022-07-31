import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function Logo2() {
  return <Image source={require('../assets/heart3.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    // marginTop:40,
    // width: 110,
    // height: 110,
    // marginLeft:120,
    // justifyContent: "center",
    // alignItems: "center",
    // marginBottom:5,
    height:scale(40),
    width:scale(40),
    borderRadius:scale(20)
  },
})