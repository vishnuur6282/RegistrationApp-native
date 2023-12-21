// Import necessary components from React and React Native
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {loginStyles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import showToast from '../../components/Toast';
import {FormValuesType} from '../registration';
import {setCurrentUser} from '../../redux/reducers/signupReducer';

const LoginScreen = ({navigation}: any) => {
  const {users} = useSelector((state: any) => state.users);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignIn = () => {
    const validUser = users.find(
      (user: FormValuesType) =>
        user.email === email && user.password === password,
    );

    if (validUser) {
      showToast('Login Success');
      dispatch(setCurrentUser(validUser));
      navigation.navigate('Home', {name: 'Jane'});
    } else {
      showToast('Invalid credentials');
    }
  };

  const onSignUp = () => {
    navigation.navigate('Registration', {name: 'Jane'});
  };

  return (
    <ImageBackground
      source={require('../../assets/Images/background.jpg')}
      style={loginStyles.backgroundImage}>
      <View style={loginStyles.container}>
        <View style={loginStyles.wrap}>
          <Text style={loginStyles.title}>Login</Text>

          <TextInput
            style={loginStyles.input}
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={text => setemail(text)}
            value={email}
            autoCapitalize="none"
          />

          <TextInput
            style={loginStyles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
            value={password}
          />
          <TouchableOpacity style={loginStyles.button} onPress={handleSignIn}>
            <Text style={loginStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onSignUp}>
            <Text style={loginStyles.signUpText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
