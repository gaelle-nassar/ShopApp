import { StyleSheet, ScrollView, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Route } from 'expo-router';
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";

export default function insidepage() {
  const router = useRouter();
  const params = useLocalSearchParams();
  return (
   <><Text>{params.item}</Text></>
  )
}
