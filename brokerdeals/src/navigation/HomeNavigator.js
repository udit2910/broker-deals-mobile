import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PartyDetails from '../screens/PartyDetails';
import Mfgs from '../screens/Mfgs';
import Deals from '../screens/Deals';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Party" component={PartyDetails} />
      <Stack.Screen name="Mfgs" component={Mfgs} />
      <Stack.Screen name="Deals" component={Deals} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
