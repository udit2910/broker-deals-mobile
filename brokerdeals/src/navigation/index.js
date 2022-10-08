import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthNavigation from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const Navigation = () => {
  let isLoggedIn = false;
  const user = useSelector(store => store.user);
  if (user.userdata) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
