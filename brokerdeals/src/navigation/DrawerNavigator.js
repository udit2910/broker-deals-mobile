import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import PartyDetails from '../screens/PartyDetails';
import Mfgs from '../screens/Mfgs';
import Deals from '../screens/Deals';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Party" component={PartyDetails} />
      <Drawer.Screen name="Mfgs" component={Mfgs} />
      <Drawer.Screen name="Deals" component={Deals} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
