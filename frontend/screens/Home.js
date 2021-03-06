import React from 'react'
import { View ,Text, TextInput,StyleSheet, SafeAreaView, ScrollView, Button} from 'react-native';
import Buttondwelling from '../components/Buttondwelling';
import { globalStyles } from '../styles/global.js';
import LinearFeetSize from '../components/LinearFeetSize';
import ShapeProperty from '../components/ShapeProperty';
import FlatnessProperty from '../components/FlatnessProperty';
import LotConfiguration from '../components/LotConfiguration';
import SlopeProperty from '../components/SlopeProperty';
import PhysicalLimits from '../components/PhysicalLimits';
import Proximity from '../components/Proximity';
import TypeOfDwelling from '../components/TypeOfDwelling';
import StyleOfDwelling from '../components/StyleOfDwelling';
import RatingMaterial from '../components/RatingMaterial';
import RatingConditions from '../components/RatingConditions';
import ConstructionRemodeDate from '../components/ConstructionRemodeDate';
import TypeOfRoof from '../components/TypeOfRoof';
import ExteriorCovering from '../components/ExteriorCovering';
import MasoneryVeneerType from '../components/MasoneryVeneerType';
import MasonerySquareFeet from '../components/MasonerySquareFeet';
import QualityOfExternalMaterial from '../components/QualityOfExternalMaterial';
import ConditionOfExternalMaterial from '../components/ConditionOfExteriorMaterial';
import FondationType from '../components/FondationType';
import EvaluateHeightBasement from '../components/EvaluteHeightBasement';
import EvaluateBasement from '../components/EvaluateBasement';
import Exposure from '../components/Exposure';
import RatingFinishedBasement from '../components/RatingFinishedBasement';
import FinishedUnfinishedSF from '../components/FinishedUnfinishedSF';
import HeatingQuality from '../components/HeatingQuality';
import CentralAirConditionning from '../components/CentralAirConditionning';
import ElectricalSystem from '../components/ElectricalSystem';
import KitchenQuality from '../components/KitchenQuality';
import HomeFunctionnality from '../components/HomeFunctionnality';
import Fireplaces from '../components/Fireplaces';
import FireplaceQuality from '../components/FireplaceQuality';
import GarageLocation from '../components/GarageLocation';
import InteriorFinishGarage from '../components/InteriorFinishGarage';
import SizeGarage from '../components/SizeGarage';
import GarageQuality from '../components/GarageQuality';
import GarageCondition from '../components/GarageCondition';
import PavedDriveway from '../components/PavedDriveway';
import Area from '../components/Area';
import TypeOfSale from '../components/TypeOfSale';
import ConditionOfSale from '../components/ConditionOfSale';
import RestOfTheFields from '../components/RestOfTheFields';
import { Formik } from 'formik';

const Home = ({navigation}) => {
  const email=""; 
  state = {
    name: "",
   }

    handleCallback = (childData) =>{
    setState({name: childData})
     }
   return (
   <SafeAreaView>
    <ScrollView>
   
   
      
    <Formik
    
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({  handleSubmit, values }) => (
          <View>
    <Text style={styles.baseText}>The type of dwelling involved in the sale</Text>
    <Buttondwelling />
    <Text style={styles.baseText}>Put the linear feet of street</Text>
    <LinearFeetSize  />
    <Text style={styles.baseText}>General shape of the property</Text>
    <ShapeProperty/>
    <Text style={styles.baseText}>Flatness of the property</Text>
    <FlatnessProperty/>
    <Text style={styles.baseText}>Lot configuration</Text>
    <LotConfiguration/>
    <Text style={styles.baseText}>Slope property</Text>
    <SlopeProperty/>
    <Text style={styles.baseText}>Physical locations within Ames city limits</Text>
    <PhysicalLimits/>
    <Text style={styles.baseText}>Proximity to various conditions</Text>
    <Proximity/>
    <Text style={styles.baseText}>Type of dwelling</Text>
    <TypeOfDwelling/>
    <Text style={styles.baseText}>Style of dwelling</Text>
    <StyleOfDwelling/>
    <Text style={styles.baseText}>Rate the material of your future house</Text>
    <RatingMaterial/>
    <Text style={styles.baseText}>Rate the overal conditions of your future house</Text>
    <RatingConditions/>
    <ConstructionRemodeDate/>
    <Text style={styles.baseText}>Select the type of your roof</Text>
    <TypeOfRoof/>
    <Text style={styles.baseText}>Exterior covering on house</Text>
     <ExteriorCovering/>
     <Text style={styles.baseText}>Masonry veneer type</Text>
     <MasoneryVeneerType/>
     <MasonerySquareFeet/>
     <Text style={styles.baseText}>Rate the quality of the external material</Text>
     <QualityOfExternalMaterial/>
     <Text style={styles.baseText}>Rate the condition of the external material</Text>
     <ConditionOfExternalMaterial/>
     <Text style={styles.baseText}>Type of the fondation</Text>
     <FondationType/>
     <Text style={styles.baseText}>Evaluate height basement</Text>
     <EvaluateHeightBasement/>
     <Text style={styles.baseText}>Evaluate genral conditions of basement</Text>
     <EvaluateBasement/>
     <Text style={styles.baseText}>Refers to walkout or garden level walls</Text>
     <Exposure/>
     <Text style={styles.baseText}>Rate the finished basement</Text>
     <RatingFinishedBasement/>
     <FinishedUnfinishedSF/>
     <Text style={styles.baseText}>Heating quality</Text>
     <HeatingQuality/>
     <Text style={styles.baseText}>Do you want a central air conditionning ?</Text>
     <CentralAirConditionning/>
     <Text style={styles.baseText}>Electrical system </Text>
     <ElectricalSystem/>
     <Text style={styles.baseText}>Kitchen quality</Text>
     <KitchenQuality/>
     <Text style={styles.baseText}>Home functionnality</Text>
     <HomeFunctionnality/>
     <Fireplaces/>
     <Text style={styles.baseText}>Fireplace quality</Text>
     <FireplaceQuality/>
     <Text style={styles.baseText}>garage location</Text>
     <GarageLocation/>
     <Text style={styles.baseText}>Interior finish of the garage</Text>
     <InteriorFinishGarage/>
     <SizeGarage/>
     <Text style={styles.baseText}>Garage quality</Text>
     <GarageQuality/>
     <Text style={styles.baseText}>Garage condition</Text>
    <GarageCondition/>
    <Text style={styles.baseText}>Paved driveway</Text>
    <PavedDriveway/>
    <Area/>
    <Text style={styles.baseText}> Type of sale</Text>
    <TypeOfSale/>
    <Text style={styles.baseText}> COndition of sale</Text>
    <ConditionOfSale/>
    <RestOfTheFields/>


    <Button onPress={handleSubmit} title="Submit" />
    </View>
        )}


    
    </Formik>

    </ScrollView> 
    </SafeAreaView>
    );
}
export default Home

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize:18,
    color: 'green'
  }
});