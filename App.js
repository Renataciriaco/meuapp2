import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/login';
import ListaScreen from './Screens/Lista';
import UsuarioScreen from './Screens/Usuario';
import ContatoScreen from './Screens/Contato';
import AlteracaoScreen from './Screens/Alteracao';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} options={{ headerShown:false}} />
        <Stack.Screen name="Lista" component={ListaScreen} options={{ headerShown:false}} />
        <Stack.Screen name="Usuario" component={UsuarioScreen} options={{ headerShown:false}} />
        <Stack.Screen name="Contato" component={ContatoScreen} options={{ headerShown:false}} />
        <Stack.Screen name="Alteracao" component={AlteracaoScreen} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;