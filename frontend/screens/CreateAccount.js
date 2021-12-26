
import React ,{useState} from 'react';
import { StyleSheet, Button, TextInput, View, Text, SafeAreaView, ScrollView,Picker } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';



export default function CreateAccount({navigation}) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
  <SafeAreaView>
    <ScrollView>
          <View style={globalStyles.container}>
      <Formik
        initialValues={{ email: '', password: '',confirmedPassword: '',FirstName:'', SecondName:'' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {props => (
          <View>

           <TextInput
              style={globalStyles.input}
              placeholder='FirstName'
              onChangeText={props.handleChange('FirstName')}
              value={props.values.FirstName}
            />

            <TextInput
              style={globalStyles.input}
              placeholder='SecondName'
              onChangeText={props.handleChange('SecondName')}
              value={props.values.SecondName}
            />

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

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Confirm your password'
              onChangeText={props.handleChange('confirmedPassword')}
              value={props.values.confirmedPassword}
            />

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Mahdia" value="Mahdia" />
        <Picker.Item label="Monastir" value="Monastir" />
        <Picker.Item label="Sfax" value="Sfax" />
        <Picker.Item label="Sousse" value="Sousse" />
        <Picker.Item label="Nabeul" value="Nabeul" />
        <Picker.Item label="Tunis" value="Tunis" />
        <Picker.Item label="Ariana" value="Ariana" />
        <Picker.Item label="Manouba" value="Manouba" /> 
        <Picker.Item label="Bizert" value="Bizert" />
        <Picker.Item label="Jandouba" value="Jandouba" />
        <Picker.Item label="Kef" value="Kef" />
        <Picker.Item label="Beja" value="Beja" />
        <Picker.Item label="SidiBouzid" value="SidiBouzid" />
        <Picker.Item label="Kairouan" value="Kairouan" />
        <Picker.Item label="Mednine" value="Mednine" />
        <Picker.Item label="Tozeur" value="Tozeur" />
        <Picker.Item label="Gafsa" value="gafsa" />
        <Picker.Item label="Tataouine" value="Tataouine" />

      </Picker> 
       <Button color='maroon' title="Submit" onPress={props.handleSubmit} />       
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
