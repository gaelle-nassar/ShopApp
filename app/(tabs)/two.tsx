import { StyleSheet, ScrollView, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

  const products1 = [
    {
      id: "1",
      name: "Earnest Green",
      image:require('../../assets/images/4900_6_09.jpg')
      },
      {
      id: "2",
      name: "Winston Orn",
      image:require('../../assets/images/5100_9_02.jpg')
      },
      {
      id: "3",
      name: "Carlton Collins",
      image:require('../../assets/images/5500_4_09.jpg')
      },
      {
        id: "4",
        name: "Earnest Green",
        image:require('../../assets/images/4900_6_09.jpg')
        },
        {
        id: "5",
        name: "Winston Orn",
        image:require('../../assets/images/5100_9_02.jpg')
        },
        {
        id: "6",
        name: "Carlton Collins",
        image:require('../../assets/images/5500_4_09.jpg')
        },
        {
          id: "7",
          name: "Earnest Green",
          image:require('../../assets/images/4900_6_09.jpg')
          },
          {
          id: "8",
          name: "Winston Orn",
          image:require('../../assets/images/5100_9_02.jpg')
          },
          {
          id: "9",
          name: "Carlton Collins",
          image:require('../../assets/images/5500_4_09.jpg')
          }
  ];

  const products2 = [
    {
      id: "1",
      name: "Pet Food 1",
      image:require('../../assets/images/petfood1.png'),
      price:'56$',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
      id: "2",
      name: "Pet Food 2",
      image:require('../../assets/images/petfood2.png'),
      price:'43$',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
      id: "3",
      name: "Pet Food 3",
      image:require('../../assets/images/petfood1.png'),
      price:'122$',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: "4",
        name: "Pet Food 4",
      image:require('../../assets/images/petfood2.png'),
      price:'20$',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
        id: "5",
        name: "Pet Food 5",
      image:require('../../assets/images/petfood1.png'),
      price:'16$',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
  ];

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Scrollviewtitle}>Scroll 1</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productContainer}
    >
      {products1.map((product) => (
        <View style={styles.productCard}>
        <Image style={styles.tinyLogo} source={product.image} />
        <Text style={styles.item}>{product.name}</Text>
      </View>
      ))}
    </ScrollView>
    <Text style={styles.Scrollviewtitle}>Scroll 2</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productContainer}
    >
      {products2.map((product) => (
        <View style={styles.productCard}>
        <Image style={styles.tinyLogo} source={product.image} />
        <Text style={styles.item}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      ))}
    </ScrollView>
    <Text style={styles.Scrollviewtitle}>Scroll 3</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productContainer}
    >
      {products2.map((product) => (
        <View style={styles.productCard}>
        <Image style={styles.tinyLogo} source={product.image} />
        <Text style={styles.item}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      ))}
    </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white'
  },
  productContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  productCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
   
  },view1: {
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
  tinyLogo : {
    width:170,
    height:170,
    borderRadius:20,
  },
  Scrollviewtitle:{
    fontWeight:'600',
    fontSize:20,
    paddingLeft:32,
    paddingTop:16
  },
  description: {
    fontSize: 10,
    paddingLeft:10
  },
  price: {
    fontSize: 15,
    paddingLeft:10,
    paddingTop:5
  },
});
