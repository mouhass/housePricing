import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';



export default function ConstructionRemodeDate() {

  return (
  <SafeAreaView>
    <ScrollView>
          <View style={globalStyles.container}>

      



      <Formik
        initialValues={{ YearBuilt: 0, YearRemodAdd: 0 }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>
          <Text style={styles.baseText}>Select the construction date</Text>
            <TextInput
               
              style={globalStyles.input}
              placeholder='Year of construction '
              onChangeText={props.handleChange('YearBuilt')}
              value={props.values.YearBuilt}
              keyboardType='numeric'
            />
<Text style={styles.baseText}>Select the remodeling date</Text>
<TextInput
               
               style={globalStyles.input}
               placeholder='Year of remodeling '
               onChangeText={props.handleChange('YearRemodAdd')}
               value={props.values.YearRemodAdd}
               keyboardType='numeric'
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

  baseText: {
    fontWeight: 'bold',
    fontSize:18,
    color: 'green'
  }

  
});
