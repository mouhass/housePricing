import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class InteriorFinishGarage extends React.Component {
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
            <Text>Finished</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Rough Finished</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Unfinished</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>No Garage</Text>
          </RadioButton>

        
         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
