import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  BackHandler,
} from 'react-native';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
// import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useForm, Controller} from 'react-hook-form';
import {userLogin} from '../redux/actions/userActions';
import {useSelector, useDispatch} from 'react-redux';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const user = useSelector(store => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user.userdata) {
      navigation.navigate('Home');
    }
    if (user.error) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    dispatch(userLogin(data));
  };

  const onForgotPasswordPressed = () => {
    // navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    // navigation.navigate('SignUp');
  };

  const disableBack = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', disableBack);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', disableBack);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {user?.loading ? (
        <View style={styles.loader}>
          <Text> loading ... </Text>
        </View>
      ) : null}
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="user_name"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        {/* <SocialSignInButtons /> */}

        {/* <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  loader: {
    ...StyleSheet.absoluteFill,
    opacity: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
});

export default SignInScreen;
