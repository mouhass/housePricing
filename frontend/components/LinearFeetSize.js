import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';



export default function LinearFeetSize() {

  return (
  <SafeAreaView>
    <ScrollView>
          <View style={globalStyles.container}>

      



      <Formik
        initialValues={{ LotFrontage: 0, LotArea: 0 }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>
            
            <TextInput
             keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Linear feet of street '
              onChangeText={props.handleChange('LotFrontage')}
              value={props.values.LotFrontage}
            />

            <TextInput
            keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Lot size in square feet'
              onChangeText={props.handleChange('LotArea')}
              value={props.values.LotArea}
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
