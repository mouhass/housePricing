/*import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View ,Text,TextInput,Button} from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            
            <TextInput placeholder="Email"/>
            
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
            />
    
    
           <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Home')}
          />
         
          
        </View>
      );
}
export default Login*/
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { dummyData } from '../data/Data'
import Carousel from './Carousel'
export default function ReviewForm() {

  return (
    
    <View style={globalStyles.container}>

        <View>
            <Carousel data = {dummyData}/>
        </View>



      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>

            <TextInput
              style={globalStyles.input}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='password'
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />

            
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}