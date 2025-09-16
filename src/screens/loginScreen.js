import React, { useState } from 'react';
import {
    Image,
    View,
    Text,
    Button,
    StyleSheet 
} from 'react-native';


export function LoginScreen() {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../../assets/login_img.png')} 
            style={styles.imageContainer}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#0000'
    },
    imageContainer: {
        alignContent: 'center'
    }
})
