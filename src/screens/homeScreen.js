import React from 'react';
import { 
  View,
  Text,
  Image
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HomeStyles } from '../styles/homeStyles';

export function HomeScreen() {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <AntDesign name="menu" size={24} color="black" />
        <Image source={require('../../assets/nike_732084.png')} style={HomeStyles.nikeImg}/>
        <Image source={require('../../assets/person.jpg')} style={HomeStyles.personImg}/>
      </View>
    </View>
  )
}
