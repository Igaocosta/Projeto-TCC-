// src/components/VehicleCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const VehicleCard = ({ vehicle, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/sedan.png')} style={styles.icon} />
      <Text style={styles.vehicleName}>{vehicle.name}</Text>
      <Text style={styles.plate}>{vehicle.plate}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress(vehicle)}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#00009C',
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: '#00009C',
    marginBottom: 10,
  },
  vehicleName: {
    fontSize: 18,
    color: '#00009C',
    fontWeight: 'bold',
  },
  plate: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00009C',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default VehicleCard;