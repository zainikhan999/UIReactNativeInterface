import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Search=()=>{
    return(
    
     <View style={styles.container}>
     <Icon style={styles.icon}
     name="search" size={20} color="#888" style={styles.icon} />

    
     <TextInput style={styles.inputField}  
     placeholder='Search, conditions,doctors..... ' />
     </View>
  

    );
};

export default Search



const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:"row",
        backgroundColor:"white",
        alignContent:'center',
        justifyContent:'space-evenly',
        marginTop:35,
        width:'100%',
        borderRadius:5,
        padding:3,
        
        borderWidth:0.3,

    },
    icon:{
      fontSize:15,
      margin:15,
    },
    inputField:{
      backgroundColor:'white',
      marginTop:0,
      width:'80%',
      borderRadius:5,
      fontSize:15,
  
    },
});
  