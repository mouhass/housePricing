import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Exposure extends React.Component {
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
            <Text>Good Exposure</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Average Exposure (split levels or foyers typically score average or above)	</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Mimimum Exposure</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>No Exposure</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>No Basement</Text>
          </RadioButton>


         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
