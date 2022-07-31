import React from "react";
import{Text,TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import Background from "../component/Background";
import Header from '../component/Header'
import Paragraph from '../component/Paragraph'
import { theme } from "../core/theme";
import Logo6 from "../component/Logo6";
import Logo7 from "../component/Logo7";
import Logo8 from "../component/Logo8";

const OnBoard1 = ({navigation}) =>{
 return(
    <ScrollView>
     <Background>
        
         <Header>Mimo</Header>
         
         <Logo6/>
         <Logo7/>
         <Logo8/>
         <Text style={{fontSize: 15,
                color:'#fff',
                fontWeight: 'bold',
                paddingVertical: 6,
                fontFamily: 'serif',
                textAlign:'justify'}}>Let's connect with your love and keep our memories.</Text>
         <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style = {styles.button} >
           <Text style= {styles.text}>Get Started</Text>
          </TouchableOpacity>
          <Text style= {styles.text}>or</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')} style = {styles.buttons}  >
          <Text style={styles.texts}>Login</Text>
          </TouchableOpacity>
          
    </Background> 
    </ScrollView>
     
 )  
}

export default OnBoard1;
const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: theme.colors.primary,
    fontSize: 18, 
    textAlign: 'center',
    borderWidth: 1,
    borderColor:theme.colors.primary,
    borderRadius:20,
    

  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color:'#fff',
    fontFamily: 'serif',
    textAlign:'center'

  },
  buttons: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor:theme.colors.surface,
    fontSize: 18, 
    textAlign: 'center',
    borderColor:theme.colors.primary,
    // borderWidth: 1,
    borderRadius:20,
    //marginBottom:100,
    


  },
  texts: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    textAlign:'center',
    fontFamily: 'serif',

  },
})
