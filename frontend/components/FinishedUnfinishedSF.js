
import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';



export default function FinishedUnfinishedSF() {

  return (
  <SafeAreaView>
    <ScrollView>
          <View style={globalStyles.container}>

     


      <Formik
        initialValues={{ BsmtFinSF1: 0, BsmtUnfSF: 0 ,TotalBsmtSF:0}}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>
            
            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Finished square feet'
              onChangeText={props.handleChange('BsmtFinSF1')}
              value={props.values.BsmtFinSF1}
            />

            <TextInput
            keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Unfinished square feet'
              onChangeText={props.handleChange('BsmtUnfSF')}
              value={props.values.BsmtUnfSF}
            />

           <TextInput
            keyboardType='numeric'
              style={globalStyles.input}
              multiline
              placeholder='Total area in square feet'
              onChangeText={props.handleChange('TotalBsmtSF')}
              value={props.values.TotalBsmtSF}
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
