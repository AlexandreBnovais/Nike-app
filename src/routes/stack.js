import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";
import { SplashScreen } from "../screens/splashScreen";

export const Stack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
    )
}
