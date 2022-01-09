
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';


export default function Area() {

  return (
  <SafeAreaView>
    <ScrollView>
          <View style={globalStyles.container}>


      <Formik
        initialValues={{ WoodDeckSF: 0, OpenPorchSF: 0,MoSold:0,YrSold:0 }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>
            
            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Wood deck area in square feet'
              onChangeText={props.handleChange('WoodDeckSF')}
              value={props.values.WoodDeckSF}
            />

            <TextInput
            keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Open porch area in square feet'
              onChangeText={props.handleChange('OpenPorchSF')}
              value={props.values.OpenPorchSF}
            />

             <TextInput
             keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Month Sold (MM)'
              onChangeText={props.handleChange('MoSold')}
              value={props.values.MoSold}
            />
       
             <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Year Sold (YYYY)'
              onChangeText={props.handleChange('YrSold')}
              value={props.values.YrSold}
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
