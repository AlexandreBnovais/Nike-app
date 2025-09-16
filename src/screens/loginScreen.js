import React, { useState } from 'react';
import {
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginStyle } from '../styles/loginStyles';


export function LoginScreen() {
    const Navigator = useNavigation();
    const [ text, onChangeText ] = useState('');
    const [ number, onChangeNumber ] = useState('');

    return (
        <View style={LoginStyle.container}>
            <Image 
                source={require('../../assets/login_img.png')} 
                style={LoginStyle.imageContainer}
            />
            <View style={LoginStyle.sectionContainer}>
                <Text style={LoginStyle.title}>Login</Text>

                <TextInput 
                    style={LoginStyle.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='EMAIL'
                    placeholderTextColor={'#144273'}
                />

                <TextInput 
                    style={LoginStyle.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='SENHA'
                    placeholderTextColor={'#144273'}
                    keyboardType='numeric'
                    secureTextEntry
                />
                <TouchableOpacity onPress={() => Navigator.navigate('Home')} style={LoginStyle.button}>
                    <Text style={LoginStyle.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
                        
        </View>
    )
}