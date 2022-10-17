import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#b71c1c',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
