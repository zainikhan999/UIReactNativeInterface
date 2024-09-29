import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from './components/Search'
import Doctors from './components/Doctors'

export default function App() {
  

  return (
      <View style={styles.container}>
      <Search></Search>
      <Text style={styles.text}>Let's Find Your Doctor</Text>
      <View style={styles.doctors}>
      <Doctors Name="Dr.John Smith" Specialization="Dermatologist" Ratings="4.9"></Doctors>
      <Doctors Name= "Dr.Anna Dinn" Specialization="Psychologist" Ratings="4.9"></Doctors>
      <Doctors Name="Dr.Angela Rayez" Specialization="Therapist" Ratings="4.9"></Doctors>
      <Doctors Name="Dr.Chris Bronte" Specialization="Dentist" Ratings="4.9"></Doctors>
     </View>
     </View>

     
     
 );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    padding:6,
    paddingTop:25,
    borderStyle:'solid',
    borderColor:'white',
    backgroundColor: '#FBFCF8',
    },
  text:{
    fontSize:25,
    height:35,
    padding:2,
    width:"100%",
    marginTop:10,
    color:"black",
   },
  doctors:{
    paddingTop:1,
    marginTop:20,

    // backgroundColor:'black',
    width:'100%',
    height:'70%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignContent:"flex-start",
    justifyContent:"space-between",
    rowGap:16,
   

  },

 


});
