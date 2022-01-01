import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class FlatnessProperty extends React.Component {
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
            <Text>Near Flat/Level</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Banked - Quick and significant rise from street grade to building</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Hillside - Significant slope from side to side</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Depression</Text>
          </RadioButton>

          

          

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
