import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/routes/stack';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
