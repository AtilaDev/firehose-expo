import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/Navigation';

export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
