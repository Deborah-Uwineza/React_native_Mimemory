import React from "react";
import{Text,TouchableOpacity,StyleSheet} from "react-native";
import Background from "../component/Background";
import Header from '../component/Header'
import Paragraph from '../component/Paragraph'
import { theme } from "../core/theme";
import Logo from "../component/Logo9";


const OnBoard = ({navigation}) =>{
 return(
     <Background>
         <Header>Mimemo_App</Header>
         <Paragraph> Mimemo_App connect people that are in relationShip
         (patrner) use it as keeping memories like Pictures,Videos and Audio .
         </Paragraph>
         <TouchableOpacity  onPress={() => navigation.navigate('Login')} style = {styles.button} >
           <Text style= {styles.text}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style = {styles.buttons}  >
          <Text style={styles.texts}>Sign Up</Text>
          </TouchableOpacity>
    </Background>  
 )  
}

export default OnBoard;
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

  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  buttons: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor:theme.colors.surface,
    fontSize: 18, 
    textAlign: 'center',
    borderColor:theme.colors.primary,
    borderWidth: 1,


  },
  texts: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 25,
  },
})
