import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { format } from 'date-fns';


export default function AgendCheckupScreen({ navigation }) {
  const [item, setItem] = useState('');
  const [nextCheck, setNextCheck] = useState('');
  const [mileage, setMileage] = useState('');
  const [nextMileage, setNextMileage] = useState('');
  const nextCheckDate = new Date(); // Defina a data desejada aqui
  const formattedDate = format(nextCheckDate, 'dd/MM/yyyy');

  const maintenanceOptions = [
    { label: 'Troca de Óleo', value: 'Troca de Óleo', intervalKm: 5000, intervalDays: 90 },
    { label: 'Troca de Filtro de Ar', value: 'Troca de Filtro de Ar', intervalKm: 10000, intervalDays: 180 },
    { label: 'Troca de Pneu', value: 'Troca de Pneu', intervalKm: 40000, intervalDays: 365 },
    { label: 'Troca de Pastilhas de Freio', value: 'Troca de Pastilhas de Freio', intervalKm: 20000, intervalDays: 180 },
    { label: 'Alinhamento e Balanceamento', value: 'Alinhamento e Balanceamento', intervalKm: 10000, intervalDays: 180 },
    { label: 'Troca de Fluido de Freio', value: 'Troca de Fluido de Freio', intervalKm: 30000, intervalDays: 730 },
    { label: 'Troca de Correia Dentada', value: 'Troca de Correia Dentada', intervalKm: 60000, intervalDays: 1460 },
  ];

  const calculateNextDate = (intervalDays) => {
    const today = new Date();
    today.setDate(today.getDate() + intervalDays);
    return today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  };

  const handleItemChange = (value) => {
    setItem(value);
    const selectedOption = maintenanceOptions.find(option => option.value === value);
    if (selectedOption && mileage) {
      const numericMileage = parseInt(mileage.replace(/\D/g, ''), 10); // Remove caracteres não numéricos
      const nextDate = calculateNextDate(selectedOption.intervalDays);
      const estimatedMileage = numericMileage + selectedOption.intervalKm;

      setNextCheck(nextDate);
      setNextMileage(estimatedMileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " km"); // Formata a quilometragem estimada
    }
  };

  // Função para formatar o input da quilometragem
  const handleMileageChange = (value) => {
    // Remove caracteres não numéricos e formata com ponto
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const fullValue = formattedValue ? `${formattedValue} km` : '';
    setMileage(fullValue);
  };

  const handleSave = () => {
    Alert.alert('Checkup salvo com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar</Text>

      <TextInput
        style={styles.input}
        placeholder="Quilometragem Atual"
        value={mileage}
        onChangeText={handleMileageChange} // Chama a nova função de formatação
        keyboardType="numeric" // Teclado numérico
      />

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={item}
          onValueChange={handleItemChange}
          style={styles.picker}
        >
          <Picker.Item label="Selecione uma manutenção" value="" />
          {maintenanceOptions.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Próxima Troca Estimada (Data)"
        value={formattedDate}
        editable={false} // Desabilita edição manual
      />

      <TextInput
        style={styles.input}
        placeholder="Km Estimado para a Próxima Troca"
        value={nextMileage}
        editable={false} // Desabilita edição manual
      />

      <Button title="Salvar" onPress={handleSave} color="#00009C" />
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
  inputContainer: {
    borderColor: '#00009C',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#00009C',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
});
