import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button} from 'react-native-paper';

import CustomNavigationDrawer from './components/CustomNavigationDrawer';

function Hello() {
  return (
    <>
      <Text>Hello, Navigation!</Text>
      <Button mode="contained">Hello Paper</Button>
    </>
  );
}

const Drawer = createDrawerNavigator();

function NavigationContents() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomNavigationDrawer {...props} />}
    >
      <Drawer.Screen name="Hello" component={Hello} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationContents />
    </NavigationContainer>
  );
}
