import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Screen />
      </NavigationContainer>
    </SafeAreaView>
  )
}
