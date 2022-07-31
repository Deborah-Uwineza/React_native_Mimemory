import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from './src/core/theme'
import OnBoard1 from './src/screens/OnBoard1';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Page1 from './src/screens/Page1';
import Page2 from './src/screens/Page2';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import Page3 from './src/screens/page3';
import ShowImage from './src/screens/ShowImage';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name='OnBoard' component={OnBoard1} options={{
          headerShown: false,
          }} />
          <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
          }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
          }}/>
          <Stack.Screen name="Page1" component={Page1} options={{
          headerShown: false,
          }}/>
          <Stack.Screen name="Page2" component={Page2} options={{
          headerShown: false,
          }}/>
          <Stack.Screen name="Page3" component={Page3} options={{
          headerShown: false,
          }}/>
           <Stack.Screen name="Page4" component={Page4} options={{
          headerShown: false,
          }}/>
          <Stack.Screen name="ShowImage" component={ShowImage} options={{
          headerShown: false,
          title: "Image",
          }}/>
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{
          headerShown: false,
          }}/>

      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
