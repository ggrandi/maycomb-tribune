import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import MainDrawer from './navigation/MainDrawer';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
};