import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from './src/screens/login/index';
import RegistrationScreen from './src/screens/registration/index';
import Home from './src/screens/home/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetails from './src/screens/userDetails';

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
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
