// src/components/VehicleDetails.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CarouselButtons from './CarouselButtons';  // Importe o componente do carrossel

const VehicleDetails = ({ route, navigation }) => {
  const { vehicle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Veículo</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{vehicle.name}</Text>

      <Text style={styles.label}>Placa:</Text>
      <Text style={styles.value}>{vehicle.plate}</Text>

      <Text style={styles.label}>Ano de Fabricação:</Text>
      <Text style={styles.value}>{vehicle.year ||  'Não informado'}</Text>

      <Text style={styles.label}>Cor:</Text>
      <Text style={styles.value}>{vehicle.color ||  'Não informado'}</Text>

      {/* Adicione o carrossel de botões */}
      <CarouselButtons />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FF0000',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#FF0000',
    marginBottom: 20,
  },
});

export default VehicleDetails;