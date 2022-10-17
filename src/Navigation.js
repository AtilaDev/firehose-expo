import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button} from 'react-native-paper';

import CustomNavigationDrawer from './components/CustomNavigationDrawer';
import CustomNavigationBar from './components/CustomNavigationBar';

const HelloStack = createNativeStackNavigator();
const Hello = () => (
  <HelloStack.Navigator
    screenOptions={{
      header: props => <CustomNavigationBar {...props} />,
    }}
  >
    <HelloStack.Screen
      name="HelloDetail"
      component={HelloDetail}
      options={{title: 'Hello!!!'}}
    />
  </HelloStack.Navigator>
);

function HelloDetail() {
  return (
    <>
      <Text>Hello, Navigation!</Text>
      <Button mode="contained">Hello Paper</Button>
    </>
  );
}

const AnotherStack = createNativeStackNavigator();
const Another = () => (
  <AnotherStack.Navigator
    screenOptions={{
      header: props => <CustomNavigationBar {...props} />,
    }}
  >
    <AnotherStack.Screen
      name="AnotherDetail"
      component={AnotherDetail}
      options={{title: 'Another!!!'}}
    />
  </AnotherStack.Navigator>
);

function AnotherDetail() {
  return <Text>Another Screen</Text>;
}

const Drawer = createDrawerNavigator();

function NavigationContents() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomNavigationDrawer {...props} />}
    >
      <Drawer.Screen name="Hello" component={Hello} />
      <Drawer.Screen name="Another" component={Another} />
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
