// Import necessary components from React and React Native
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {loginStyles} from '../login/style';
import {useDispatch} from 'react-redux';
import {onSigningUp} from '../../redux/reducers/signupReducer';
import showToast from '../../components/Toast';

export interface FormValuesType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
const RegistrationScreen = ({navigation}: any) => {
  //  const users = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState<FormValuesType>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [fieldWarnings, setFieldWarnings] = useState<Partial<FormValuesType>>(
    {},
  );

  const handleInputChange = (inputName: keyof FormValuesType, text: string) => {
    setFormValues({
      ...formValues,
      [inputName]: text,
    });

    setFieldWarnings({
      ...fieldWarnings,
      [inputName]: '',
    });
  };

  const handleSignIn = () => {
    const newFieldWarnings: Partial<FormValuesType> = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value) {
        newFieldWarnings[key as keyof FormValuesType] = 'Field cannot be empty';
      }
    });

    if (formValues.password !== formValues.confirmPassword) {
      newFieldWarnings.confirmPassword = 'Passwords do not match';
    }

    //if (Object.keys(newFieldWarnings).length > 0) {
    //  setFieldWarnings(newFieldWarnings);
    //  showToast(
    //    'Please fill in all required fields and make sure passwords match',
    //  );
    //  return;
    //}

    dispatch(onSigningUp(formValues));
    showToast('Successfully registered');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../../assets/Images/background.jpg')}
      style={loginStyles.backgroundImage}>
      <View style={loginStyles.container}>
        <View style={loginStyles.wrap}>
          <TextInput
            style={loginStyles.input}
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={text => handleInputChange('email', text)}
            value={formValues.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {fieldWarnings.email && (
            <Text style={loginStyles.warning}>{fieldWarnings.email}</Text>
          )}
          <TextInput
            style={loginStyles.input}
            placeholder="Username"
            placeholderTextColor="grey"
            onChangeText={text => handleInputChange('username', text)}
            value={formValues.username}
            autoCapitalize="none"
          />
          {fieldWarnings.username && (
            <Text style={loginStyles.warning}>{fieldWarnings.username}</Text>
          )}
          <TextInput
            style={loginStyles.input}
            placeholder="Phone"
            placeholderTextColor="grey"
            onChangeText={text => handleInputChange('phone', text)}
            value={formValues.phone}
            keyboardType="numeric"
          />
          {fieldWarnings.phone && (
            <Text style={loginStyles.warning}>{fieldWarnings.phone}</Text>
          )}
          <TextInput
            style={loginStyles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={text => handleInputChange('password', text)}
            value={formValues.password}
            autoCapitalize="none"
          />
          {fieldWarnings.password && (
            <Text style={loginStyles.warning}>{fieldWarnings.password}</Text>
          )}
          <TextInput
            style={loginStyles.input}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            onChangeText={text => handleInputChange('confirmPassword', text)}
            value={formValues.confirmPassword}
            autoCapitalize="none"
          />
          {fieldWarnings.confirmPassword && (
            <Text style={loginStyles.warning}>
              {fieldWarnings.confirmPassword}
            </Text>
          )}
          <TouchableOpacity style={loginStyles.button} onPress={handleSignIn}>
            <Text style={loginStyles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
