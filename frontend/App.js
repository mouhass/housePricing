import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text ,TextInput} from "react-native";
import Home from './screens/Home'
import Login from './screens/Login'
import CreateAccount from "./screens/CreateAccount"
import About from './screens/About'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
