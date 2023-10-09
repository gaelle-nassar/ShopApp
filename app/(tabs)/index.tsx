import { SafeAreaView, FlatList,StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Appbar } from 'react-native-paper';
const persons = [
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
]
export default function TabOneScreen() {
  return (
    <View>
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={persons}
        renderItem={({ item }) =>(
          <View style={styles.view1}>
            <Image style={styles.tinyLogo} source={item.image} />
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ) }
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
