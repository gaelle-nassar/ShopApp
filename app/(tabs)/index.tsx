import { SafeAreaView, FlatList,StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { IconButton } from 'react-native-paper';
import { CartProvider, useCart } from '../CartContext';
import { useNavigation } from '@react-navigation/native';
interface Person {
  id: string;
  name: string;
  price:number;
  description:string;
  image: any;
  quantity:number
}

const persons: Person[] = [
  {
	id: "1",
	name: "Earnest Green",
  image:require('../../assets/images/4900_6_09.jpg'),
  price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
  },
  {
	id: "2",
	name: "Winston Orn",
  image:require('../../assets/images/5100_9_02.jpg'),
  price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
  },
  {
	id: "3",
	name: "Carlton Collins",
  image:require('../../assets/images/5500_4_09.jpg'),
  price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
  },
  {
    id: "4",
    name: "Earnest Green",
    image:require('../../assets/images/4900_6_09.jpg'),
    price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
    },
    {
    id: "5",
    name: "Winston Orn",
    image:require('../../assets/images/5100_9_02.jpg'),
    price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
    },
    {
    id: "6",
    name: "Carlton Collins",
    image:require('../../assets/images/5500_4_09.jpg'),
    price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
    },
    {
      id: "7",
      name: "Earnest Green",
      image:require('../../assets/images/4900_6_09.jpg'),
      price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
      },
      {
      id: "8",
      name: "Winston Orn",
      image:require('../../assets/images/5100_9_02.jpg'),
      price: 43,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      quantity:1},
      {
      id: "9",
      name: "Carlton Collins",
      image:require('../../assets/images/5500_4_09.jpg'),
      price: 43,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  quantity:1
      }
]

export default function TabOneScreen() {
  const { addToCart } = useCart();
  const navigation = useNavigation();
  return (
   
      <View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={persons}
            renderItem={({ item }) => (
              <View style={styles.view1}>
                <Image style={styles.tinyLogo} source={item.image} />
                <Link
        href={{
          pathname:'/insidepage',
          params:{item: JSON.stringify(item)}
        }}
         ><Text style={styles.item}>{item.name}</Text></Link>
                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() => addToCart(item)} // Use addToCart from useCart
                >
                  <IconButton icon="cart" size={20} />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flexDirection: 'row',
    padding:15,
  },
  view1: {
    width: '50%',
    flexDirection:'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 15,
    marginTop: 5,
  },
  cartButton: {
    position: 'absolute',
    top: 10, 
    right: 20, 
    backgroundColor:'white',
    borderRadius:50,
  },
  tinyLogo : {
    width:170,
    height:170,
    borderRadius:20,
    marginLeft:'auto',
    marginRight:'auto'
  },
  centeredContent: {
  alignItems:'center',
    justifyContent: 'center',
    fontWeight:'bold'
  }, 
  
  coloredContent: {
    backgroundColor:'white',
    marginTop:-24
    },
});
