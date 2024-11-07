import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import VehicleCard from '../components/VehicleCard';

const HomeScreen = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const userName = 'Igor Costa';
  const vehicles = [
    { id: 1, name: 'Toyota Corolla', plate: 'ABC-1234', year: 2019, color: 'Preto' },
    { id: 2, name: 'Honda Civic', plate: 'DEF-5678', year: 2020, color: 'Branco' },
  ];

  // Função para solicitar permissão e obter o token de notificação
  const registerForPushNotifications = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert('Permissão negada', 'Você precisa permitir notificações para receber alertas de manutenção.');
        return;
      }

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('Token de notificação Expo:', token);
      setExpoPushToken(token);
      
      // Envia a notificação de boas-vindas
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Bem-vindo ao app!',
          body: `Olá, ${userName}! Seja bem-vindo ao aplicativo de gestão de veículos.`,
          sound: true,
        },
        trigger: { seconds: 1 },
      });
    } else {
      Alert.alert('Erro', 'Notificações só são suportadas em dispositivos físicos.');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  };

  const handleLogin = () => {
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  const handleOptionsPress = (vehicle) => {
    navigation.navigate('VehicleDetails', { vehicle });
  };

  const handleAddVehiclePress = () => {
    navigation.navigate('VehicleRegister');
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  useEffect(() => {
    handleLogin();
    registerForPushNotifications();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Olá, {userName}</Text>
      <ScrollView>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} onPress={handleOptionsPress} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton} onPress={handleAddVehiclePress}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
        <Ionicons name="settings" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  userName: {
    fontSize: 24,
    color: '#00009C',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 90,
    backgroundColor: '#00009C',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  settingsButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00009C',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HomeScreen;
