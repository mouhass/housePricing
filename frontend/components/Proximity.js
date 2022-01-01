import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Proximity extends React.Component {
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
            <Text>Adjacent to arterial street</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Adjacent to feeder street</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Normal</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Within 200' of North-South Railroad</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Adjacent to North-South Railroad</Text>
          </RadioButton>

          <RadioButton value={'item6'}>
            <Text>Near positive off-site feature--park, greenbelt, etc.</Text>
          </RadioButton>

          <RadioButton value={'item7'}>
            <Text>Adjacent to postive off-site feature</Text>
          </RadioButton>

          <RadioButton value={'item8'}>
            <Text>Within 200' of East-West Railroad</Text>
          </RadioButton>

          <RadioButton value={'item9'}>
            <Text>Adjacent to East-West Railroad</Text>
          </RadioButton>

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
