import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      {/* <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
