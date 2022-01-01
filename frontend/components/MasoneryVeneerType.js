import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class MasoneryVeneerType extends React.Component {
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
            <Text>Brick Common</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Brick Face</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Cinder Block</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>None</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Stone</Text>
          </RadioButton>
          

          


         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
