import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {View,TextInput,StyleSheet,TouchableOpacity, ScrollView,Text} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { theme } from "../core/theme";
import Logo from "../component/Logo9"
import Background from "../component/Background";
// import { nameValidator } from "../Validations/nameValidator";
// import { passwordValidator } from "../Validations/passwordValidator";
// import { confirmPasswordValidator } from "../Validations/confirmPasswordValidator";
// import { emailValidator } from "../Validations/emailValidator";



    

        // const onSignUpPressed = () => {
        //     const nameError = nameValidator(userName.value)
        //     const emailError = emailValidator(email.value)
        //     const passwordError = passwordValidator(password.value)
        //     const confirmPasswordError = confirmPasswordValidator(confirmPassword.value)
        //     if (emailError || passwordError || nameError || confirmPasswordError) {
        //     setName({ ...userName, error: nameError })
        //     setEmail({ ...email, error: emailError })
        //     setPassword({ ...password, error: passwordError })
        //     setConfirmPassword({ ...confirmPassword, error: confirmPasswordError })
        //     return
        //     }
        //     navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Login' }],
        //     })
        // }

const SignUp = ({navigation}) => {
    const [userName,setUserName] = useState();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const [secured, setSecured] = useState(true);
    const [secure, setSecure] = useState(true);

        return (
            <ScrollView>
            <Background>
            
            {/* <Logo/> */}
            <Text style={styles.text}>JOIN US</Text>
            <View style={{
                marginTop: 60,
            }}>
            <TextInput
                onChangeText={(val) => setUserName(val)}
                placeholder="user-Name"
                style={{
                    width: 320,
                    padding: 10,
                    paddingLeft: 50, 
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: '#4c4c4c',
                    backgroundColor: '#ffff',
                    color: '#000',
                    

      
       
        }}

        />
        <FontAwesome name='user-circle-o' size={24} color='#4c4c4c' style={{
                    top: 14,
                    left: 10,
                    position: 'absolute'
        }} />
        </View>
    
        <View style={{
            marginTop: 20,
        }}>
        <TextInput
            onChangeText={(val) => setEmail(val)}
            placeholder="Email"
            style={{
                width: 320,
                padding: 10,
                paddingLeft: 50, 
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#4c4c4c',
                backgroundColor: '#ffff',
                color: '#000',
        
        }}
        />
        <Feather name='mail' size={24} color='#4c4c4c' style={{
                    top: 14,
                    left: 10,
                    position: 'absolute'
                }} />
        </View>
        <View style={{
            marginTop: 20,
        }}>
        <TextInput
            onChangeText={(val) => setPassword(val)}
            placeholder="Password"
            style={{
                width: 320,
                padding: 10,
                paddingLeft: 50, 
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#4c4c4c',
                backgroundColor: '#ffff',
                color: '#000',
                
        }}
                secureTextEntry={secured}
        />
        <FontAwesome name='lock' size={24} color='#4c4c4c' style={{
            top: 14,
            left:10,
            position: 'absolute',
        }}/>
        {
         secured?
         <TouchableOpacity onPress={() => setSecured(false)}style={{
             top:14,
             right:10,
             position:'absolute',
         }} >
             <MaterialCommunityIcons name='eye-off-outline' size={24}/>
         </TouchableOpacity> :
         <TouchableOpacity onPress={() => setSecured(true)} style={{
             top:14,
             right:10,
             position:'absolute',
         }}>
             <MaterialCommunityIcons name='eye-outline' size={24}/>
         </TouchableOpacity>  
        }
        </View>
        <View style={{marginTop: 20,}}>
        <TextInput
            onChangeText={(val) => setConfirmPassword(val)}
            placeholder="Confirm-Password"
            style={{
                width: 320,
                padding: 10,
                paddingLeft: 50, 
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#4c4c4c',
                backgroundColor: '#ffff',
                color: '#000',
                
        }}
                secureTextEntry={secure}
        />
        <FontAwesome name='lock' size={24} color='#4c4c4c' style={{
            top: 14,
            left:10,
            position: 'absolute',
        }}/>
        {
            secure?
            <TouchableOpacity onPress={() => setSecure(false)} style={{
                top:14,
                right:10,
                position:'absolute',
            }}>

                <MaterialCommunityIcons name="eye-off-outline" size={24}/>
            </TouchableOpacity>:
            <TouchableOpacity onPress={() => setSecure(true)} style={{
                top:14,
                right:10,
                position:'absolute',
            }}>
                <MaterialCommunityIcons name="eye-outline" size={24}/>
            </TouchableOpacity>
        }
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={ styles.button}>
        <Text style={{fontSize: 18,alignSelf: 'center',color:'#fff',}}> Signup </Text>
        </TouchableOpacity>
        
        <View style={{
          marginTop:20,
          flexDirection:'row',
        }}>
            <Text style={{ color:'#000', }}> Do you have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login') }>
                <Text style={{
                    color:theme.colors.primary,
                        marginLeft:10, 
                        marginRight:10
                }}>LogIn</Text>
            </TouchableOpacity>
        </View>
        
        </Background>
        </ScrollView>
        )
        }
        

export default SignUp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:22,
        backgroundColor: theme.colors.surface,
    },

    text:{
        marginTop:10,
        fontSize: 30,
        alignSelf: 'center',
        color:theme.colors.primary,
        fontWeight: 'bold',
        // marginTop:100,
        // textAlign:'center',
        // fontSize: 30,
        // fontWeight:'bold',
        // color:  theme.colors.primary,
        // fontFamily: 'Georgia-Italic',
        // marginBottom:20,
    
        
    },
    button:{
        width: '100%',
        padding: 8,
        backgroundColor:theme.colors.primary,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop:20,
        marginBottom:35,
       
    },
})