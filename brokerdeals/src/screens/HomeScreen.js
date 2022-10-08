import React, {useState, useEffect} from 'react';
import {View, Text, Alert, BackHandler, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prompt the user before leaving the screen
        Alert.alert('Exit App?', 'Are you sure to exit App?', [
          {text: 'No', style: 'cancel', onPress: () => {}},
          {
            text: 'Yes',
            style: 'destructive',
            // onPress: () => navigation.dispatch(e.data.action),
            onPress: () => BackHandler.exitApp(),
          },
        ]);
      }),
    [navigation],
  );

  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

export default HomeScreen;
