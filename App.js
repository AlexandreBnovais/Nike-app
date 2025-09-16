import React, {useEffect} from 'react';
import { HoltwoodOneSC_400Regular, useFonts } from '@expo-google-fonts/holtwood-one-sc';
import { IstokWeb_400Regular, IstokWeb_700Bold } from '@expo-google-fonts/istok-web';
import * as splashScreen from 'expo-splash-screen';

import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/routes/stack';

export default function App() {

  splashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    HoltwoodOneSC_400Regular,
    IstokWeb_400Regular,
    IstokWeb_700Bold,
  });

  useEffect(() => {
    if(loaded || error) {
      splashScreen.hideAsync();
    }
  }, [!loaded && !error]);

  if(!loaded && !error) {
    return null
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
