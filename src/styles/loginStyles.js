import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    imageContainer: {
        width: 'auto',
        height: 300,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignContent: 'center'
    },
    sectionContainer: {
        width: 'auto',
        alignItems: 'center',
        gap: 30,
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'HoltwoodOneSC_400Regular',
        fontSize: 30,
        color: '#144273',
        marginVertical: 20,
    },
    input: {
        backgroundColor: '#F3F3F2',
        borderRadius: 10,
        boxShadow: '0px 7px 4px 0px rgba(0,0,0,0.15)',
        paddingHorizontal: 20,
        fontFamily: 'IstokWeb_400Regular',
        fontWeight: '600',
        width: '100%',
        height: 60,
    },
    button: {
        backgroundColor: '#F2C94C',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 30,        
    },
    textButton: {
        fontFamily: 'IstokWeb_400Regular',
        fontSize: 25,
        fontWeight: 600,
        color: '#ffff',
        textAlign: 'center'
    }
});