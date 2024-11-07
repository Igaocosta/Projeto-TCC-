import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function AddMaintenanceScreen({ navigation }) {
  const [vehicleName, setVehicleName] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleAddMaintenanceScreen = () => {
    // Aqui você pode implementar a lógica para adicionar a manutenção
    Alert.alert('Manutenção adicionada com sucesso!');
    navigation.navigate('Details'); // Retorna para a tela de detalhes
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Manutenção</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Veículo"
        value={vehicleName}
        onChangeText={setVehicleName}
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo de Serviço"
        value={serviceType}
        onChangeText={setServiceType}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddMaintenanceScreen}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00009C',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00009C',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
