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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#FF0000',
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: '#FF0000',
    marginBottom: 10,
  },
  vehicleName: {
    fontSize: 18,
    color: '#FF0000',
    fontWeight: 'bold',
  },
  plate: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF0000',
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