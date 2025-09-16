import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/loginScreen";

export const Stack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
