import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class TypeOfSale extends React.Component {
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
            <Text>Warranty Deed - Conventional </Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Warranty Deed - Cash</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Warranty Deed - VA Loan</Text>
          </RadioButton>

          <RadioButton value={'item4'} >
            <Text>Home just constructed and sold </Text>
          </RadioButton>
  
          <RadioButton value={'item5'}>
            <Text>Court Officer Deed/Estate</Text>
          </RadioButton>
  
          <RadioButton value={'item6'}>
            <Text>Contract 15% Down payment regular terms </Text>
          </RadioButton>

          <RadioButton value={'item7'} >
            <Text>Contract Low Down payment and low interest</Text>
          </RadioButton>
  
          <RadioButton value={'item8'}>
            <Text>Contract Low Interest</Text>
          </RadioButton>
  
          <RadioButton value={'item9'}>
            <Text>Contract Low Down</Text>
          </RadioButton>

          <RadioButton value={'item10'}>
            <Text>Other</Text>
          </RadioButton>
         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
