import React from 'react';

import { createAppContanair, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Tipo from './src/pages/Tipo';
import Cadastro_Cliente from './src/pages/Cadastro_Cliente';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inititalRouteName="Login">
        <Stack.Screen name ="Login" component={Login} />
        <Stack.Screen name ="Tipo" component={Tipo} />
        <Stack.Screen name ="Cadastro_Cliente" component={Cadastro_Cliente} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
