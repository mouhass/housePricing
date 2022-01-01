import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class PhysicalLimits extends React.Component {
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
            <Text>Bloomington Heights</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Bluestem</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Briardale</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Brookside</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Clear Creek</Text>
          </RadioButton>

          <RadioButton value={'item6'}>
            <Text>College Creek</Text>
          </RadioButton>

          <RadioButton value={'item7'}>
            <Text>Crawford</Text>
          </RadioButton>

          <RadioButton value={'item8'}>
            <Text>Edwards</Text>
          </RadioButton>

          <RadioButton value={'item9'}>
            <Text>Gilbert</Text>
          </RadioButton>

          <RadioButton value={'item10'}>
            <Text>Iowa DOT and Rail Road</Text>
          </RadioButton>

          <RadioButton value={'item11'}>
            <Text>Meadow Village</Text>
          </RadioButton>

          <RadioButton value={'item12'}>
            <Text>Mitchell</Text>
          </RadioButton>

          <RadioButton value={'item13'}>
            <Text>North Ames</Text>
          </RadioButton>

          <RadioButton value={'item14'}>
            <Text>Northridge</Text>
          </RadioButton>

          <RadioButton value={'item15'}>
            <Text>Northpark Villa</Text>
          </RadioButton>

          <RadioButton value={'item16'}>
            <Text>Northridge Heights</Text>
          </RadioButton>

          <RadioButton value={'item17'}>
            <Text>Northwest Ames</Text>
          </RadioButton>

          <RadioButton value={'item18'}>
            <Text>Old Town</Text>
          </RadioButton>

          <RadioButton value={'item19'}>
            <Text>South & West of Iowa State University</Text>
          </RadioButton>

          <RadioButton value={'item20'}>
            <Text>Sawyer</Text>
          </RadioButton>

          <RadioButton value={'item21'}>
            <Text>Sawyer West</Text>
          </RadioButton>

          <RadioButton value={'item22'}>
            <Text>Somerset</Text>
          </RadioButton>

          <RadioButton value={'item23'}>
            <Text>Stone Brook</Text>
          </RadioButton>

          <RadioButton value={'item24'}>
            <Text>Timberland</Text>
          </RadioButton>

          <RadioButton value={'item25'}>
            <Text>Veenker</Text>
          </RadioButton>

          

        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
