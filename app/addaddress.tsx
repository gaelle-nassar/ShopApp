import { SafeAreaView, FlatList,StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Text, View } from '../components/Themed';
import Checkbox from 'expo-checkbox';
import { SelectList } from 'react-native-dropdown-select-list'


export default function TabAddressScreen() {
    const [firstname, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [appartment, setAppartment] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [isChecked, setChecked] = useState(false);

    const countries = [
        {key:'1', value:'Lebanon'},
        {key:'2', value:'France'},
        {key:'3', value:'Belgium'},
        {key:'4', value:'USA'},
    ]
  
  return (
   
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Add new Address</Text>
        <TextInput
          value={firstname}
          onChangeText={(firstname) => setFirstName(firstname)}
          placeholder={'First Name'}
          style={styles.input}
        />
        <TextInput
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
          placeholder={'Last Name'}
          style={styles.input}
        />
        <TextInput
          value={company}
          onChangeText={(company) => setCompanyName(company)}
          placeholder={'Company'}
          style={styles.input}
        />
        <TextInput
          value={address}
          onChangeText={(address) => setAddress(address)}
          placeholder={'Address'}
          style={styles.input}
        />
        <TextInput
          value={appartment}
          onChangeText={(appartment) => setAppartment(appartment)}
          placeholder={'Appartment'}
          style={styles.input}
        />
        <TextInput
          value={city}
          onChangeText={(city) => setCity(city)}
          placeholder={'City'}
          style={styles.input}
        />

<Text style={styles.text_title}>Country/region</Text>
        <SelectList 
        setSelected={(val: string) => setCountry(val)} 
        data={countries} 
        save="value"
        boxStyles={styles.input_dropdown}
    />
    <TextInput
          value={zip}
          onChangeText={(zip) => setZip(zip)}
          placeholder={'Postal/Zip Code'}
          style={styles.input}
        />
        <TextInput
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          placeholder={'Phone'}
          style={styles.input}
        />
        <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Set as default address</Text>
      </View>
         <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.blackButton}>
                    <Text style={styles.buttonText}>Add Address</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.whiteButton}>
                    <Text style={styles.whitebuttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  title :{
    textAlign:'center',
    fontWeight:'bold',
    margin:10
  },
  container:{
    flex:1,
    backgroundColor:'white'
  },
  input:{
    width: 350,
    height: 50,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderWidth:1,
    borderColor:'#D3D3D3',
    marginRight:'auto',
    marginLeft:'auto',
    borderRadius:0
  },
  input_dropdown:{
    width: 350,
    height: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderWidth:1,
    borderColor:'#D3D3D3',
    marginRight:'auto',
    marginLeft:'auto',
  },
  text_title:{
    marginLeft:30,
    marginTop:5
  },
  buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom:20,
      marginLeft:'auto',
      marginRight:'auto',
      width:350
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
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:25,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    borderColor:'#D3D3D3'
  },
});
