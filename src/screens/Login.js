import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import { theme } from "../core/theme";
import Logo from "../component/Logo9"
import Background from "../component/Background";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [secured, setSecured] = useState(true);

   

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
                fontFamily: 'serif'
            }}>Welcome Back.</Text>
            <View style={{
                marginTop: 20,
            }}>
                <TextInput
                    onChangeText={(val) => setEmail(val)} 
                    placeholder="Enter your email"
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
                    top: 15,
                    left: 10,
                    position: 'absolute'
                }} />
            </View>
            
            <View style={{
                marginTop: 20,
            }}>
                <TextInput 
                    placeholder="Password"
                    onChangeText={(val) => setPassword(val)}
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
                {/* <Feather name='lock' size={24} style={{
                    position:'absolute',
                    top: 17,
                    left: 14,
                }} /> */}
                <FontAwesome name='lock' size={24} color='#4c4c4c' style={{
                    top: 14,
                    left:10,
                    position: 'absolute',
                }}/>

                {
                    secured ? 
                    <TouchableOpacity onPress={() => setSecured(false)} style={{
                        position:'absolute',
                        top:17,
                        right: 15,
                    }}>
                        <MaterialCommunityIcons name='eye-off-outline' size={24} />
                    </TouchableOpacity> : 
                    <TouchableOpacity onPress={() => setSecured(true)} style={{
                        position:'absolute',
                        top:17,
                        right: 15,
                    }}> 
                        <MaterialCommunityIcons name='eye-outline' size={24} />
                    </TouchableOpacity>
                }
                
            </View>

           
            <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')} >
                <Text style={{
                    color:  theme.colors.primary,
                    marginTop:20,
                    marginRight:190,
                }}>Forgot Password ? </Text>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={()=>navigation.navigate('Page3')} style={ styles.button}>
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                marginTop: 20,
            }}>
                <Text style={{
                    color:'#000',
                    marginRight: 10,
                    marginLeft: 10,
                }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{
                        color:  theme.colors.primary,
                        marginBottom:80,
                    }}>Create an account ?</Text>
                </TouchableOpacity>
              
            </View>

        {/* </View> */}
        </Background>
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({

    button: {
        width: '100%',
        padding: 5,
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
      },
})