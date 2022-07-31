import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function Logo6() {
//   return <Image source={require('../assets/181218-13.jpg')} style={styles.image} />
return(
  <Image source={require('../assets/lover1.jpg')} style={styles.image} />
) 
 
}

const styles = StyleSheet.create({
  image: {
    marginTop:10,
    marginLeft:100,
    marginBottom:2,
    height:100,
    width:"60%",
    borderRadius:10,
  },
})