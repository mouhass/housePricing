import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class HomeFunctionnality extends React.Component {
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
            <Text>Typical Functionality</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Minor Deductions 1</Text>
          </RadioButton>

          <RadioButton value={'item3'}>
            <Text>Minor Deductions 2</Text>
          </RadioButton>
  
          <RadioButton value={'item4'}>
            <Text>Moderate Deductions</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Major Deductions 1</Text>
          </RadioButton>

          <RadioButton value={'item6'}>
            <Text>Major Deductions 2</Text>
          </RadioButton>

          <RadioButton value={'item7'}>
            <Text>Severely Damaged</Text>
          </RadioButton>

          <RadioButton value={'item8'}>
            <Text>Salvage only</Text>
          </RadioButton>


         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
