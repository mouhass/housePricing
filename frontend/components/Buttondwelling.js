import * as React from 'react';
import { View ,Text,SafeAreaView, ScrollView,Button } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Buttondwelling extends React.Component {
  
  onSelect(index, value){
   
    this.setState({
      
    })
  }

  onTrigger = (event) => {
    this.props.parentCallback(event.target.myname.value);
    event.preventDefault();
}


  
  render(){
    return(
      <SafeAreaView>
    <ScrollView>
      <View >
      
        <RadioGroup
          onSelect = {(index, value) => this.onSelect(index, value)}
          onSubmit = {this.onTrigger}
        >
          <RadioButton value={'item1'} name="myname" >
            <Text>1-STORY 1946 & NEWER ALL STYLES</Text>
          </RadioButton>
  
          <RadioButton value={'item2'}>
            <Text>1-STORY 1945 & OLDER</Text>
          </RadioButton>
  
          <RadioButton value={'item3'}>
            <Text>1-STORY W/FINISHED ATTIC ALL AGES</Text>
          </RadioButton>

          <RadioButton value={'item4'}>
            <Text>1-1/2 STORY FINISHED ALL AGES</Text>
          </RadioButton>

          <RadioButton value={'item5'}>
            <Text>2-STORY 1946 & NEWER</Text>
          </RadioButton>

          <RadioButton value={'item6'}>
            <Text>2-STORY 1945 & OLDER</Text>
          </RadioButton>

          <RadioButton value={'item7'}>
            <Text>2-1/2 STORY ALL AGES</Text>
          </RadioButton>

          <RadioButton value={'item8'}>
            <Text>SPLIT OR MULTI-LEVEL</Text>
          </RadioButton>

          <RadioButton value={'item9'}>
            <Text>SPLIT OR MULTI-LEVEL</Text>
          </RadioButton>

          <RadioButton value={'item10'}>
            <Text>SPLIT FOYER</Text>
          </RadioButton>

          <RadioButton value={'item11'}>
            <Text>DUPLEX - ALL STYLES AND AGES</Text>
          </RadioButton>

          <RadioButton value={'item12'}>
            <Text>1-STORY PUD (Planned Unit Development) - 1946 & NEWER</Text>
          </RadioButton>

          <RadioButton value={'item13'}>
            <Text>1-1/2 STORY PUD - ALL AGES</Text>
          </RadioButton>

          <RadioButton value={'item14'}>
            <Text>2-STORY PUD - 1946 & NEWER</Text>
          </RadioButton>

          <RadioButton value={'item15'}>
            <Text>PUD - MULTILEVEL - INCL SPLIT LEV/FOYER</Text>
          </RadioButton>

          <RadioButton value={'item16'}>
            <Text>2 FAMILY CONVERSION - ALL STYLES AND AGES</Text>
          </RadioButton>
        
        </RadioGroup>
        <Button title = "submit"  />
                
               
      </View>
      
      </ScrollView>
      </SafeAreaView>
    );
  }}
