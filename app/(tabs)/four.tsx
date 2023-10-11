import { SafeAreaView, FlatList,StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Text, View } from '../../components/Themed';
import Checkbox from 'expo-checkbox';
import { SelectList } from 'react-native-dropdown-select-list'

const data = [
    {
      firstname: 'John',
      lastName: 'Doe',
      company: 'ABC Company',
      address: '123 Main St',
      appartment: 'Apt 101',
      city: 'New York',
      country: 'USA',
      zip: '10001',
      phone: '123-456-7890',
    },
    {
      firstname: 'Jane',
      lastName: 'Smith',
      company: 'XYZ Inc.',
      address: '456 Elm St',
      appartment: 'Apt 202',
      city: 'Los Angeles',
      country: 'USA',
      zip: '90001',
      phone: '987-654-3210',
    },{
        firstname: 'John',
        lastName: 'Doe',
        company: 'ABC Company',
        address: '123 Main St',
        appartment: 'Apt 101',
        city: 'New York',
        country: 'USA',
        zip: '10001',
        phone: '123-456-7890',
      },
    

  ];
  

export default function TabFourScreen() {

  
  return (
   <View style={styles.container}>
      <ScrollView style={styles.addresslist}>
        {data.map((data) => (
        <View style={styles.address}>
        <Text>{data.firstname} {data.lastName}</Text>
        <Text>{data.company}</Text>
        <Text>{data.appartment},{data.address}</Text>
        <Text>{data.city} {data.zip}</Text>
        <Text>{data.phone}</Text>
        <Text>{data.country}</Text>
        <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.blackButton}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.whiteButton}>
                    <Text style={styles.whitebuttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
      </View>
      ))}
      </ScrollView>
      
        
      
        <View style={styles.totalpriceView}>
        <Link href='/addaddress'  style={styles.link}>
      <Text style={styles.totalprice}>Add new address</Text></Link>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  addresslist:{
    flex:1,
  },
  address:{
    marginLeft:'auto',
    marginRight:'auto',
    alignItems:'center',
    marginVertical:30
  },
  buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom:20,
      marginLeft:'auto',
      marginRight:'auto',
      width:250
  },
  blackButton: {
      backgroundColor: 'black',
      padding: 15,
      flex:1,
      marginRight: 5,
  },
  whiteButton: {
    padding: 15,
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 5,
},
buttonText: {
    color: 'white',
    textAlign: 'center',
},
whitebuttonText: {
      color: 'black',
      textAlign: 'center',
  },
  totalpriceView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    padding: 16,
    elevation:15,
  },
  totalprice: {
    fontSize: 18,
    textAlign: 'center',
    color:'white'
  },
  link:{
    marginLeft:'auto',
    marginRight:'auto',
  }

});
