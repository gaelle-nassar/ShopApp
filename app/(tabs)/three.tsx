import React from 'react';
import { StyleSheet, Image, ScrollView, View,Button,TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Text } from '../../components/Themed';
import { useCart } from '../CartContext';

export default function TabThreeScreen() {
  const { cart , incrementQuantity, decrementQuantity } = useCart();
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return (
    <View style={styles.container}>
    <ScrollView style={styles.productList}>
      {cart.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <Image style={styles.tinyLogo} source={product.image} />
          <View style={styles.productInfo}>
            <Text style={styles.item}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.productInfoprice}>
            <Text style={styles.price}>{product.price}$</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => decrementQuantity(product.id)}
              >
                <IconButton icon="minus" size={15} />
              </TouchableOpacity>
              <Text>{product.quantity}</Text>
              <TouchableOpacity
                onPress={() => incrementQuantity(product.id)}
              >
                <IconButton icon="plus" size={15} />
              </TouchableOpacity>
            </View>
            </View>
          </View>
          
        </View>
      ))}
      
    </ScrollView>
    <View style={styles.totalpriceView}>
      <Text style={styles.totalprice}>Total Price : {totalPrice}$</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  productList: {
    flex: 1,
  },
  productCard: {
    flexDirection: 'row',
    margin:15,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10, 
    elevation:16
  },
  item: {
    fontSize: 15,
  },
  tinyLogo: {
    width: 170,
    height: 170,
    borderRadius: 20,
    marginRight: 16,
  },
  description: {
    fontSize: 10,
    paddingTop: 5,
  },
  price: {
    fontSize: 15,
    paddingTop: 5,
    flex:0.5
  },
  productInfo: {
    flex: 1, 
  },
  productInfoprice: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityText: {
    fontSize: 18,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  totalpriceView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgreen',
    padding: 16,
    elevation:15,
    borderRadius:30,
    margin:20
  },
  totalprice: {
    fontSize: 18,
    textAlign: 'center',
  },

});
