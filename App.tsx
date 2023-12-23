import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/login/index';
import RegistrationScreen from './src/screens/registration/index';
import Home from './src/screens/home/index';
import UserDetails from './src/screens/userDetails';
import imagePaths from './src/constants/images';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={({route}) => ({
            headerStyle: {
              backgroundColor: '#232D36',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{
                    uri:
                      (route.params as any)?.userDetail?.imagePath ??
                      imagePaths[0],
                  }}
                  defaultSource={require('./src/assets/Images/portrait.jpg')}
                  style={styles.headerImage}
                />
                <Text style={{color: 'white', fontSize: 18}}>
                  {(route.params as any)?.userDetail?.text || 'User name'}
                </Text>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 54,
    marginRight: 8,
  },
});

export default App;
