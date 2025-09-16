import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nikeImg: {
        width: 50,
        height: 50,
    },
    personImg: {
        width: 40,
        height: 40,
        borderRadius: '50%'
    }
})