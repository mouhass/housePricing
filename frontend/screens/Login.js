
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { dummyData } from '../data/Data'
import Carousel from '../components/Carousel'


export default function Login({navigation}) {

  return (
  <SafeAreaView>
    <ScrollView>
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

            
       <View style={styles.fixToText}>
       <Button color='maroon' title="Submit" onPress={() => navigation.navigate('About')} /> 

       <Button color='maroon' title="Create account ?" onPress={() => navigation.navigate('CreateAccount')} /> 
      </View>
            
            
          </View>
        )}
      </Formik>
    </View>
    </ScrollView>
    </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
 
  fixToText: {
    flexDirection: 'row',
    margin:30,
    justifyContent: 'space-between',
  },
  
});
