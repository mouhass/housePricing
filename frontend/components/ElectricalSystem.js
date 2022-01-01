import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class ElectricalSystem extends React.Component {
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
            <Text>Standard Circuit Breakers & Romex</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Fuse Box over 60 AMP and all Romex wiring (Average)</Text>
          </RadioButton>

          <RadioButton value={'item3'}>
            <Text>60 AMP Fuse Box and mostly Romex wiring (Fair)</Text>
          </RadioButton>
  
          <RadioButton value={'item4'}>
            <Text>60 AMP Fuse Box and mostly knob & tube wiring (poor)</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Mixed</Text>
          </RadioButton>


         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
