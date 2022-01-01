import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class ShapeProperty extends React.Component {
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
            <Text>Regular</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Slightly irregular</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Moderately Irregular</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Irregular</Text>
          </RadioButton>

          

          

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
