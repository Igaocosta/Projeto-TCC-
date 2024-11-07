import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';

const VehicleRegisterScreen = ({ navigation }) => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleKm, setVehicleKm] = useState('');
  const [kmPerWeek, setKmPerWeek] = useState('');
  const [nextMaintenanceDate, setNextMaintenanceDate] = useState('');

  useEffect(() => {
    // Solicitar permissões para notificações com alerta estilizado
    const requestPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        showStyledAlert();
      }
    };
    
    requestPermissions();
  }, []);

  // Função para mostrar um alerta estilizado
  const showStyledAlert = () => {
    Alert.alert(
      "Permissão Necessária",
      "Para receber lembretes de manutenção, permita notificações nas configurações dentro do aplicativo.",
      [
        { text: "Cancelar", style: "cancel" },
        
      ],
      { cancelable: false }
    );
  };

  // Função para formatar a quilometragem
  const formatKilometers = (value) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedValue ? `${formattedValue} km` : '';
  };

  const scheduleNotification = async (date) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Manutenção do Veículo",
        body: `A manutenção do ${vehicleName} está próxima!`,
      },
      trigger: {
        date: new Date(date),
      },
    });
  };

  const handleRegister = async () => {
    // Lógica para salvar o veículo e agendar a notificação
    Alert.alert('Sucesso', 'Veículo cadastrado com sucesso!');
    
    // Definir o horário da notificação para 10 segundos depois
    const maintenanceDate = new Date();
    maintenanceDate.setSeconds(maintenanceDate.getSeconds() + 10); // Define o horário para 10 segundos depois
    await scheduleNotification(maintenanceDate);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Veículo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Veículo"
        value={vehicleName}
        onChangeText={setVehicleName}
      />
      <TextInput
        style={styles.input}
        placeholder="Placa do Veículo"
        value={vehiclePlate}
        onChangeText={setVehiclePlate}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano do Veículo"
        value={vehicleYear}
        onChangeText={setVehicleYear}
      />
      <TextInput
        style={styles.input}
        placeholder="Cor do Veículo"
        value={vehicleColor}
        onChangeText={setVehicleColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Km Atual do Veículo"
        value={formatKilometers(vehicleKm)}
        onChangeText={(value) => setVehicleKm(formatKilometers(value))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Km da próxima manutenção"
        value={formatKilometers(kmPerWeek)}
        onChangeText={(value) => setKmPerWeek(formatKilometers(value))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data da última manutenção (YYYY-MM-DD)"
        value={nextMaintenanceDate}
        onChangeText={setNextMaintenanceDate}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00009C',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#00009C',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  registerButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VehicleRegisterScreen;
