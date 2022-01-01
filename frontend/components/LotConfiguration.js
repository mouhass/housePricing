import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class LotConfiguration extends React.Component {
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
            <Text>Inside lot</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Corner lot</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Cul-de-sac</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Frontage on 2 sides of property</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Frontage on 3 sides of property</Text>
          </RadioButton>

          

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
