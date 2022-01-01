import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class ExteriorCovering extends React.Component {
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
            <Text>Asbestos Shingles</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>Asphalt Shingles</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>Brick Common</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>Brick Face</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>Cinder Block</Text>
          </RadioButton>
          <RadioButton value={'item6'}>
            <Text>Cement Board</Text>
          </RadioButton>


          <RadioButton value={'item7'}>
            <Text>Hard Board</Text>
          </RadioButton>

          <RadioButton value={'item8'}>
            <Text>Imitation Stucco</Text>
          </RadioButton>

          <RadioButton value={'item9'}>
            <Text>Metal Siding</Text>
          </RadioButton>

          <RadioButton value={'item10'}>
            <Text>Cement Board</Text>
          </RadioButton>

          <RadioButton value={'item11'}>
            <Text>Other</Text>
          </RadioButton>

          <RadioButton value={'item12'}>
            <Text>Plywood</Text>
          </RadioButton>

          <RadioButton value={'item13'}>
            <Text>PreCast</Text>
          </RadioButton>

          <RadioButton value={'item14'}>
            <Text>Stone</Text>
          </RadioButton>

          <RadioButton value={'item15'}>
            <Text>Stucco</Text>
          </RadioButton>

          <RadioButton value={'item16'}>
            <Text>Vinyl Siding</Text>
          </RadioButton>

          <RadioButton value={'item17'}>
            <Text>Wood Siding</Text>
          </RadioButton>

          <RadioButton value={'item18'}>
            <Text>Wood Shingles</Text>
          </RadioButton>

          


         

         
        </RadioGroup>
        
               
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }}
