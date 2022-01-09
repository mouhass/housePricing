import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class GarageLocation extends React.Component {
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
            <Text>More than one type of garage</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Attached to home</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Basement Garage</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Built-In (Garage part of house - typically has room above garage)</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Car Port</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Detached from home</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>No Garage</Text>
          </RadioButton>

         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
