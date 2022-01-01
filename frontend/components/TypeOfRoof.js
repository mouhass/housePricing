import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class TypeOfRoof extends React.Component {
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
            <Text>Flat</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Gable</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Gabrel (Barn)</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Hip</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Mansard</Text>
          </RadioButton>
          <RadioButton value={'item6'}>
            <Text>Shed</Text>
          </RadioButton>

         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
