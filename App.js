import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import Navigation from './src/Navigation';
import useTheme from './src/useTheme';

export default function App() {
  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Navigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
