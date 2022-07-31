import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { theme } from "../core/theme";
import Logo from "../component/Logo9"
import Background from "../component/Background";

const ResetPasswordScreen = ({navigation}) =>{
    const [email,setEmail] = useState({ value: '', error: '' });

    
    return(
        <ScrollView>
        <Background>
        {/* <View style={styles.container}> */}
        {/* <Logo/> */}
        <Text style={{
           marginTop:100,
           textAlign:'center',
           fontSize: 30,
           fontWeight:'bold',
           color:  theme.colors.primary,
           fontFamily: 'serif',
        //    marginBottom:30,
        }}>Restore Password</Text>
        <View style={{
           marginTop: 70,
        }}>
           <TextInput
               onChangeText={(val) => setEmail(val)} 
               placeholder="Enter your email"
               style={{
                width: 320,
                padding: 10,
                paddingLeft: 50, 
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#4c4c4c',
                backgroundColor: '#ffff',
                color: '#000',
                   fontFamily: 'serif'
                   
               }}
           />
           <Feather name='mail' size={24} color='#4c4c4c' style={{
               top: 13,
               left: 10,
               position: 'absolute'
           }} />
       </View>
           <Text style={{
               color:  theme.colors.primary,
               marginTop:20,
               marginLeft:10,
               fontFamily: 'serif',
               textAlign:'justify'
           }}>You will receive email with password resent link. </Text>

       <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={ styles.button}>
           <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center',  fontFamily: 'serif'}}>SEND INSTRUCTIONS</Text>
       </TouchableOpacity>

   {/* </View> */}
   </Background>
   </ScrollView>
)
}

export default ResetPasswordScreen;
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:22,
        backgroundColor: theme.colors.surface,
    },
    button: {
       width: '100%',
       padding: 5,
       backgroundColor: theme.colors.primary,
       borderRadius: 10,
       alignSelf: 'center',
       marginTop: 20,
       marginBottom:290,
     },
    })
       