import React from 'react'
import { View ,Text , StyleSheet} from 'react-native';
import { IconButton , Colors } from 'react-native-paper';

const About = ({navigation}) => {
   return (

    <View>
    
    <Text >Lorem Ipsum is simply dummy text of the printing {'\n'}
        and typesetting industry. Lorem Ipsum has been the industry's {'\n'}standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make{'\n'} a type specimen book. It has survived not 
        only five centuries, but also the leap into electronic typesetting,{'\n'} remaining essentially unchanged. It was popularised 
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,{'\n'} and more recently with desktop publishing
         software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
         <View style={styles.container}>
         <IconButton
    icon="step-forward"
    color={Colors.red500}
    
    size={40}
    onPress={() => navigation.navigate("Home")}
     />
     </View>
    </View>
    );


}
export default About

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
      
    },
   
  });