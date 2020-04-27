import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import MainStack from './navigation/MainStack';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
};