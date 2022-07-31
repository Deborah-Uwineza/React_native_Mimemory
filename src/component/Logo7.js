import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function Logo7() {
//   return <Image source={require('../assets/181218-13.jpg')} style={styles.image} />
return <Image source={require('../assets/lover2.jpg')} style={styles.image} />
 
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
    // height:scale(100),
    // width:scale(100),
    // borderRadius:scale(80)
    marginRight:100,
    height:100,
    width:"60%",
    borderRadius:10,
  },
})