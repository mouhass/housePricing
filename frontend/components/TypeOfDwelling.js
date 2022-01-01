import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class TypeOfDwelling extends React.Component {
  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }
  
  render(){
    return(
      <SafeAreaView>
    <ScrollView>
      <View >
      
        <RadioGroup
          onSelect = {(index, value) => this.onSelect(index, value)}
        >
          <RadioButton value={'item1'} >
            <Text>Single-family Detached</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Two-family Conversion; originally built as one-family dwelling</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Duplex</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Townhouse End Unit</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Townhouse Inside Unit</Text>
          </RadioButton>

         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
