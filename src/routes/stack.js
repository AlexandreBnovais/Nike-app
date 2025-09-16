import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";

export const Stack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            
        </Stack.Navigator>
    )
}
