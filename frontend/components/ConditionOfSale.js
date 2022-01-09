import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class ConditionOfSale extends React.Component {
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
            <Text>Normal Sale</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Abnormal Sale -  trade, foreclosure, short sale</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Adjoining Land Purchase</Text>
          </RadioButton>

          <RadioButton value={'item4'} >
            <Text>Allocation - two linked properties with separate deeds, typically condo with a garage unit	</Text>
          </RadioButton>
  
          <RadioButton value={'item5'}>
            <Text>Sale between family members</Text>
          </RadioButton>
  
          <RadioButton value={'item6'}>
            <Text>Home was not completed when last assessed (associated with New Homes)</Text>
          </RadioButton>

         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
