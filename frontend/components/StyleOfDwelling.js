import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class StyleOfDwelling extends React.Component {
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
            <Text>One story</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>One and one-half story: 2nd level finished</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>One and one-half story: 2nd level unfinished</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Two story</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Two and one-half story: 2nd level finished</Text>
          </RadioButton>


          <RadioButton value={'item6'}>
            <Text>Two and one-half story: 2nd level unfinished</Text>
          </RadioButton>

          <RadioButton value={'item7'}>
            <Text>Split Foyer</Text>
          </RadioButton>

          <RadioButton value={'item8'}>
            <Text>Split Level</Text>
          </RadioButton>
         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
