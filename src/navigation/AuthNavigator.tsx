import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import LoginScreen from './../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
