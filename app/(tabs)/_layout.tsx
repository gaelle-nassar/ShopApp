import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, TouchableOpacity, Text, Image ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
         <Tabs.Screen
        name="two"
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={25} color={color} /> // Use the home icon
          ),
          headerLeft: () => (
              <TouchableOpacity >
                <Image source={require('../../assets/images/favicon.png')} style={styles.icon}/>

              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons name="ios-search" size={25} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerLeft: () => {
            const navigation = useNavigation();
      
            return (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
                <Ionicons name="ios-arrow-back" size={30} color="black" />
              </TouchableOpacity>
            );
          },
          title: 'Shop',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-grid" size={25} color={color} /> // Use the home icon
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="ios-search" size={25} color="black" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Cart',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-cart" size={25} color={color} /> // Use the home icon
          ),
          headerLeft: () => {
            const navigation = useNavigation();
      
            return (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
                <Ionicons name="ios-arrow-back" size={30} color="black" />
              </TouchableOpacity>
            );
          },
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons name="ios-search" size={25} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Address',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-pin" size={25} color={color} /> // Use the home icon
          ),
          headerLeft: () => {
            const navigation = useNavigation();
      
            return (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
                <Ionicons name="ios-arrow-back" size={30} color="black" />
              </TouchableOpacity>
            );
          },
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons name="ios-search" size={25} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  
  icon: {
marginLeft:15
  },
})