import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signin from './signin';
import Add from './Add';

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Home">
    <Stack.Screen name="signin" component={signin} 
    options={{
      headerShown: false,
  }}/>
    <Stack.Screen name="Add" component={Add}
    options={{
      headerShown: false,
  }} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}
