
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';


export default function RestOfTheFields() {

  return (
  <SafeAreaView>
    <ScrollView>
          <View style={globalStyles.container}>
      <Formik
        initialValues={{  GrLivArea: 0,BsmtFullBath: 0,BsmtHalfBath:0,FullBath:0,HalfBath:0,Bedroom:0,Kitchen:0 }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>
            
            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Above grade (ground) living area square feet'
              onChangeText={props.handleChange('GrLivArea')}
              value={props.values.GrLivArea}
            />

            <TextInput
            keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Basement full bathrooms'
              onChangeText={props.handleChange('BsmtFullBath')}
              value={props.values.BsmtFullBath}
            />

<TextInput
            keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Basement half bathrooms'
              onChangeText={props.handleChange('BsmtHalfBath')}
              value={props.values.BsmtHalfBath}
            />

<TextInput
                keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Full bathrooms above grade'
              onChangeText={props.handleChange('FullBath')}
              value={props.values.FullBath}
            />

<TextInput
                keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Half baths above grade'
              onChangeText={props.handleChange('HalfBath')}
              value={props.values.HalfBath}
            />

<TextInput
keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Bedrooms above grade (does NOT include basement bedrooms)'
              onChangeText={props.handleChange('Bedroom')}
              value={props.values.Bedroom}
            />

<TextInput
keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Kitchens above grade'
              onChangeText={props.handleChange('Kitchen')}
              value={props.values.Kitchen}
            />

     
            
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
