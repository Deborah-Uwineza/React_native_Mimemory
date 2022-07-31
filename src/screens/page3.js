
import React, { useLayoutEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import {scale, ScaledSheet} from "react-native-size-matters";
import {Feather} from '@expo/vector-icons';

import List from "../component/List";
import SearchBar from "../component/SearchBar";
import { theme } from "../core/theme";
import Logo1 from "../component/Logo1";
import Logo2 from "../component/Logo2";
import  Icon  from "react-native-vector-icons/Feather";
import Logo4 from "../component/Logo4";
import Logo5 from "../component/Logo5";
import Logo from "../component/Logo9";
import Images from  "../component/Images";
import { IconButton } from "react-native-paper";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

// useLayoutEffect((navigation) =>{
//   navigation.setOptions({
//     headerRight: () => <IconButton icon="plus"/>,
//   });
// }, [navigation]);


const Page3 = (props) => {
  return(
      <View style={styles.container}>
          <View style={{justifyContent: 'space-between', flexDirection:'row',marginBottom:40}}>
              <View style={{justifyContent: 'space-between', alignItems:'center',flexDirection:'row'}}>
                <Logo/>
                <Text style={{
                      //fontWeight:'bold',
                      fontSize:20,
                      marginLeft:5,
                      fontFamily: 'serif'}}>
                          Rich
                </Text>
              </View>
              <View style={{justifyContent: 'space-between', alignItems:'center',flexDirection:'row',marginTop:5,}}>
                 <Text style={{
                      //fontWeight:'bold',
                      fontSize:20,
                      marginRight:5,
                      fontFamily: 'serif'}}> 
                          Me
                 </Text>
                 <Logo1/>
              </View>
          </View>
          <View style={{justifyContent: 'space-between', alignItems:'center',flexDirection:'row',marginTop:5 }}> 
            <Text style={{ fontSize:20,
                 marginLeft:5,
                 fontFamily: 'serif',
                 color:theme.colors.primary,
                 textAlign:'center',
                 fontWeight:'bold'}}>My Memos</Text>
                 <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Feather name='plus-square' size={36} color='#000' style={{marginTop:5 , marginRight:20}}/>
            </TouchableOpacity>
         </View>
         <ScrollView>
          <View style={{
                        display:'flex',
                        flexWrap:'wrap',
                        flexDirection:'row',
                        marginTop:20,
                    }}> 
                    {
                        Images.map((image,index) => (
                        <TouchableOpacity key={index} onPress={() => props.navigation.navigate('ShowImage',{url:image.url})}> 
                        <Image source={image.url} style={{height:deviceHeight / 3,
                                width:deviceWidth / 3-6,
                                borderRadius:10,
                                margin:2}}/>
                        </TouchableOpacity>
                        ))
                    }
                    
                    const { resources } = results;


            
         </View>
         </ScrollView>
      </View>
  );
};

export default Page3;
const styles = StyleSheet.create({
  container:{
      flex:1,
     //backgroundColor:theme.colors.surface
   
  },
  
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
    color:theme.colors.primary,
  },
});


