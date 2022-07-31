import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function Logo4() {
  return <Image   source={require('../assets/images.jpg')} style={{
    resizeMode: "center",
    height:scale(35),
    width:scale(35),
    borderRadius:scale(20),
    backgroundColor:'#d3d3d3',
    }} />
}

// const styles = StyleSheet.create({
//   image: {
//     // marginTop:40,
//     // width: 110,
//     // height: 110,
//     // marginLeft:120,
//     // justifyContent: "center",
//     // alignItems: "center",
//     // marginBottom:5,
//     height:scale(35),
//     width:scale(35),
//     borderRadius:scale(20),
//     resizeMode: "center",
//     // backgroundColor:'#d3d3d3',
//     // alignItems:'center',
//     // justifyContent:'center',
//     // padding:10,
    
//   },
//})