import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View ,Text} from 'react-native';

const Home = ({navigation}) => {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>home</Text>
      </View>
    );
}
export default Home
