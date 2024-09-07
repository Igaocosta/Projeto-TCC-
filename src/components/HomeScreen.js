// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import VehicleCard from '../components/VehicleCard';

const HomeScreen = ({ navigation }) => {
  const userName = 'João da Silva';
  const vehicles = [
    { id: 1, name: 'Toyota Corolla', plate: 'ABC-1234', year: 2019, color: 'Preto' },
    { id: 2, name: 'Honda Civic', plate: 'DEF-5678', year: 2020, color: 'Branco' },
  ];

  // Função para navegar até a tela de detalhes do veículo
  const handleOptionsPress = (vehicle) => {
    navigation.navigate('VehicleDetails', { vehicle });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Olá, {userName}</Text>
      <ScrollView>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} onPress={handleOptionsPress} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  },
  userName: {
    fontSize: 24,
    color: '#FF0000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;