import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Doctors=(props)=>{
    return(

      
        <View style={styles.doc}>
          <Icon style={styles.icon} name="user-md" size={80} 
          color="#1ca9c9" style={styles.icon} />
          <Text style={styles.heading}>{props.Name}</Text>
          <Text style={styles.subheading}>{props.Specialization}</Text>
          <View style={styles.ratings}>
          <Icon  name="star" size={10} color="yellow" style={styles.icon} />
          <Text style={styles.text}>{props.Ratings}</Text>
          </View>
       </View>
        
        

    );
}
export default Doctors
const styles=StyleSheet.create(
    {

        
        doc:{
            width:'48%',
            height:'48%',
            backgroundColor:'white',
            borderRadius:15,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            borderStyle: 'solid',
            rowGap:5,
            elevation:5,
            overflow:"hidden",
        
          },
          text:
          {
            color:"white",

          },
          
          heading:{
            fontSize:17,
            fontWeight:"900",
        },

        subheading:{
            fontWeight:'500',
            color:"grey",

        },
          ratings:{
            backgroundColor:'black',
            color:'white',
            width:'30%',
            height:'10%',
            borderRadius:10,
            textAlign:'center',
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:'center',
            gap:3,

          }
    }
)