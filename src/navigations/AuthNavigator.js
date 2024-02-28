import * as React from 'react';
import LoginScreen from '../api/screens/LoginScreen';
import RegistrationScreen from '../api/screens/RegistrationScreen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
    <Navigator>
        <Nav.Screen name="Login" component={LoginScreen} />
        <Nav.Screen name="Registration" component={RegistrationScreen} />
      </Navigator>
  </NavigationContainer>
);
};

export default AuthNavigator;