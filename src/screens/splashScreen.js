import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { SplashStyles } from '../styles/splashStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export function SplashScreen() {
  const Navigator = useNavigation();

  return (
    <LinearGradient
      colors={['#14A08D', '#2ED982']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={SplashStyles.container}
    >
      <Image source={require('../../assets/logo_nike.svg')}/>

      <View style={SplashStyles.main}>
        <Image source={require('../../assets/tennis_2.png')} style={SplashStyles.imgPng}/>
        
        <View style={SplashStyles.textContainer}>
          <Text style={SplashStyles.h1}>SUMMER COLLECTIONS</Text>
          <Text style={[SplashStyles.h1, {color: '#fff'}]}>2022</Text>
          <Text style={SplashStyles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>
        </View>
        
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => Navigator.navigate('Login')} style={SplashStyles.button}>
          <Text style={SplashStyles.textButton}>GET STARTED</Text>
          <Feather name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      

    </LinearGradient>
  )
}
