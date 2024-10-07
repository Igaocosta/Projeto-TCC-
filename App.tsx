// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons'; // Importar ícones da biblioteca
import HomeScreen from './src/components/HomeScreen';
import VehicleDetails from './src/components/VehicleDetails';
import LoginScreen from './src/components/LoginScreen';
import SplashScreen from './src/components/SplashScreen';
import ChatScreen from './src/components/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <FontAwesome5 name="home" size={24} color="black" />,
            headerStyle: {
              backgroundColor: '#f0f0f0', // Cor de fundo do header
              height: 100, // Aumenta a altura do header para melhor visualização do arredondamento
            },
          }}
        />
        <Stack.Screen
          name="VehicleDetails"
          component={VehicleDetails}
          options={{
            headerTitle: () => <FontAwesome5 name="car" size={24} color="black" />,
            headerStyle: {
              backgroundColor: '#f0f0f0',
              height: 100,
            },
          }}
        />
        <Stack.Screen
          name="Chatbot"
          component={ChatScreen}
          options={{
            headerTitle: () => <FontAwesome5 name="car" size={24} color="black" />,
            headerStyle: {
              backgroundColor: '#f0f0f0',
              height: 100,
            },
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
