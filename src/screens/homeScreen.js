import React from 'react';
import { 
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import { HomeStyles } from '../styles/homeStyles';

export function HomeScreen() {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <AntDesign name="menu" size={24} color="black" />
        <Image source={require('../../assets/nike_732084.png')} style={HomeStyles.nikeImg}/>
        <Image source={require('../../assets/person.jpg')} style={HomeStyles.personImg}/>
      </View>

      <View style={HomeStyles.navContainer}>
        <TouchableOpacity onPress={() => {}} style={HomeStyles.item}>
          <Image source={require('../../assets/thumb_tennis_2.png')} style={HomeStyles.imgItem}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={HomeStyles.item}>
          <Image source={require('../../assets/thumb_tennis_1.png')} style={HomeStyles.imgItem}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={HomeStyles.item}>
          <Image source={require('../../assets/thumb_tennis_3.png')} style={HomeStyles.imgItem}/>
        </TouchableOpacity>
      </View>

      <View style={HomeStyles.mainContainer}>
        <View style={HomeStyles.mainImgContainer}>
          <Image 
            source={require('../../assets/tennis_2.png')}
            style={HomeStyles.mainImg}
          />
        </View>
        

        <View style={HomeStyles.info}>
          <Text style={HomeStyles.h1}>KYRIE INFINITY</Text>
          <Text style={HomeStyles.h2}>Calçados para basquete</Text>
          <Text style={HomeStyles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>
        </View>

        <View style={HomeStyles.footerContainer}>
          <Text style={HomeStyles.h2}>Preço</Text>

          <View style={HomeStyles.priceContainer}>
            <Text style={HomeStyles.h1}>$799</Text>

            <View style={HomeStyles.iconContainer} >
              <View style={[HomeStyles.iconItem, {backgroundColor: '#144273'}]}>
                <Image source={require('../../assets/share_icon.png')} />
              </View>

              <LinearGradient
                colors={['#2ED982', '#14A08D']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                style={HomeStyles.iconItem}
              >
                <Image source={require('../../assets/shopping_bag_icon.png')} />
              </LinearGradient>
            </View>
          </View>

        </View>

      </View>
    </View>
  )
}
