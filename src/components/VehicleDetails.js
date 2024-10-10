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

      {/* <Button title="Voltar" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#00009C',
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
    color: '#00009C',
    backgroundColor: '#fff',
    marginBottom: 5,
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 10,
    textAlign: 'center', // Alinha o texto horizontalmente no centro
    textAlignVertical: 'center', // Alinha o texto verticalmente no centro (Android)
    justifyContent: 'center', // Para centralizar conteúdo flex, mas não é necessário aqui
  }
  ,
});

export default VehicleDetails;