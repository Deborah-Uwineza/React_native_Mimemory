
import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
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

const Page2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const _renderIcon =(icon) =>{
      return (
          <View style={{backgroundColor:'#d3d3d3',height:scale(35),width:scale(35),alignItems:'center',justifyContent:'center',borderRadius:scale(20),padding:5}}>
        <Feather name={icon} size={scale(20) }color='#00008b'/>
   </View>
   
   );
  }
  const _renderIconBell =(icons) =>{
    return (
        <View style={{backgroundColor:'#d3d3d3',height:scale(35),width:scale(35),alignItems:'center',justifyContent:'center',borderRadius:scale(20),padding:5}}>
      <Icon name="bell" size={scale(20) }color='#00008b'/>
 </View>
    );
}
const Card = ()=>{
    return(
        <View style={{backgroundColor:'#d3d3d3',height:scale(40),justifyContent: 'space-between', alignItems:'center',flexDirection:'row'}}>
            <View>
            <Feather name="camera" size={scale(15)} color={'#3cb043'}/>
            <Text  style={{marginLeft:scale(10)}}>Photo</Text>
            </View>
            <View>
            <Feather name="video" size={scale(15)} color={'#3cb043'}/>
         <Text  style={{marginLeft:scale(10)}}>Video</Text>
            </View>
            </View>
        
         
    )
}

const _renderMultiMediaCard = ()=>{
    return(
        <View style={{ marginTop: scale(20), width:'100%',backgroundColor:'red'}}>
            
            <FlatList
            horizontal
            data={[1]}
            ItemSeparatorComponent={() =><View style={{marginTop:scale(5)}}/>}
            renderItem={(item)=><Card/> }
            />
        </View>
    )
}
  return (
        <View style={styles.container}>
        <View style={{height: scale(50) ,paddingHorizontal:scale(0) ,backgroundColor:theme.colors.surface,marginBottom:22 }}>
        {/* <View style={{ flex:1, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}> */}
        
        <View style={{ width:'100%',flex:1, flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
        <Logo2/>
            {_renderIcon("search")}
            {_renderIconBell()} 
            
            <Logo4/>
            
      <Logo1/>
      {/* </View> */}
    </View>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-around'}}>
     <View>
     <Logo5/>
     </View>
           <View style={{flexDirection:'row', justifyContent:'space-between',width:'80%'}} >
           <Text style={{opacity:0.4}}>are you funny person?</Text>
            <Feather name="smile" size={scale(30)} color="yellow"/>
           </View>
           
        </View>
        {_renderMultiMediaCard()}
     </View>
    
  );
};

export default Page2;
const styles = StyleSheet.create({
  container:{
      flex:1,
     backgroundColor:theme.colors.surface
   
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

