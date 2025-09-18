import { StyleSheet } from "react-native";

export const SplashStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    imgPng: {
        width: 'auto',
        height: 300,
        resizeMode: 'contain',
    },
    textContainer: {
        paddingVertical: 20,
    },
    h1: {
        color: '#144273',
        fontFamily: 'HoltwoodOneSC_400Regular',
        fontSize: 30
    },
    p: {
        fontFamily: 'IstokWeb_400Regular',
        fontSize: '1rem',
        color: '#fff'
    },
    containerButton: {
        alignItems: 'center',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2C94C',
        boxShadow: '0px 11px 27px -13px rgba(0,0,0,0.75)',
        borderRadius: 30,
        height: 60,
        width: 200,
        gap: 10
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'IstokWeb_700Bold'
    }
    
})