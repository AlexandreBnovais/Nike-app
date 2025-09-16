import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    },

    // Header content

    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nikeImg: {
        width: 60,
        height: 60,
    },
    personImg: {
        width: 40,
        height: 40,
        borderRadius: '50%'
    },
    navContainer: {
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    item: {
        flexShrink: 1,
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#F3F3F2',
    },

    imgItem: {
        resizeMode: 'contain',
        width: '100%'
    },

    // Main Content

    mainContainer: {
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainImgContainer: {
        width: '100%',
    },
    mainImg: {
        resizeMode: 'contain',
        width: 'auto'
        
    },
    info: {
        gap: 10,
    },
    h1: {
        fontFamily: 'HoltwoodOneSC_400Regular',
        color: '#144273',
        fontSize: 30,
    },
    h2: {
        fontFamily: 'IstokWeb_400Regular',
        color: '#144273',
        fontSize: 20,
        fontWeight: 600,
    },
    p: {
        fontFamily: 'IstokWeb_400Regular',
        color: '#144273',
        lineHeight: '1.5rem'
    },

    // Footer Content

    footerContainer: {
        width: '100%',
        height: 'auto',
        marginVertical: 20,
    },
    priceContainer: {
        flexShrink: 1,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },
    iconItem: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        padding: 10
    },
})