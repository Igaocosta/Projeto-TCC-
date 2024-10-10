import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons'; // Importar ícones da biblioteca
import HomeScreen from './src/components/HomeScreen';
import VehicleDetails from './src/components/VehicleDetails';
import LoginScreen from './src/components/LoginScreen';
import SplashScreen from './src/components/SplashScreen';
import ChatScreen from './src/components/ChatScreen';
import { View, Text } from 'react-native';
import MapsScreen from './src/components/MapsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Tela de login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho
        />

        {/* Tela de Splash */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho
        />

        {/* Tela Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <FontAwesome5 name="home" size={24} color="black" />,
            headerStyle: {
              backgroundColor: '#f0f0f0', // Cor de fundo do header
              height: 100, // Altura do header
            },
          }}
        />

        {/* Tela de Detalhes do Veículo */}
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

        {/* Tela de Chatbot */}
        <Stack.Screen
          name="Chatbot"
          component={ChatScreen}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name="robot" size={24} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chatbot</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f0f0f0',
              height: 100,
            },
          }}
        />
        <Stack.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name="map" size={24} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mapa</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f0f0f0',
              height: 100,
            },
          }}
        />
         <Stack.Screen
          name="Checkup"
          component={MapsScreen}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name="robot" size={24} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Checkup</Text>
              </View>
            ),
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
