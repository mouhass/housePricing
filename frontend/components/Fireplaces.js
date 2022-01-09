import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';


export default function Fireplaces() {

  return (
  <SafeAreaView>
    <ScrollView>
          <View style={globalStyles.container}>



      <Formik
        initialValues={{ Fireplaces: 0}}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>
            
            <TextInput
            keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Number of fireplaces'
              onChangeText={props.handleChange('Fireplaces')}
              value={props.values.Fireplaces}
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
