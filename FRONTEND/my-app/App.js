import React from 'react';

import { KeyboardAvoidingView } from 'react-native';

import { createAppContanair, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*Para indentar o código, use Alt + Shift + F*/

import Login from './src/pages/Login';
import Tipo from './src/pages/Tipo';
import Cadastro_Cliente from './src/pages/Cadastro_Cliente';
import Admin from './src/pages/Admin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inititalRouteName="Login">
        <Stack.Screen name="Login"
                      component={Login}
                      options={{
                        headerShown: false,
                      }} />

        <Stack.Screen name="Admin"
                      component={Admin}
                      options={{
                        headerShown: false,
                      }} />

        <Stack.Screen name="Tipo"
                      component={Tipo}
                      options={{
                        headerTitle: false,
                        headerTransparent: true,
                      }} />

        <Stack.Screen name="Cadastro_Cliente"
                      component={Cadastro_Cliente}
                      options={{
                        headerTitle: false,
                        headerTransparent: true,
                      }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
