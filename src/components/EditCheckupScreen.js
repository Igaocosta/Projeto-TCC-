import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Atualizando a importação

// Define as opções de manutenção com intervalos de quilometragem e dias
const maintenanceOptions = [
  { label: 'Troca de Óleo', value: 'troca_oleo', intervalKm: 5000, intervalDays: 90 },
  { label: 'Troca de Filtro de Ar', value: 'troca_filtro_ar', intervalKm: 10000, intervalDays: 180 },
  { label: 'Troca de Pneu', value: 'troca_pneu', intervalKm: 40000, intervalDays: 365 },
  { label: 'Troca de Pastilhas de Freio', value: 'troca_pastilhas_freio', intervalKm: 20000, intervalDays: 180 },
  { label: 'Alinhamento e Balanceamento', value: 'alinhamento_balanceamento', intervalKm: 10000, intervalDays: 180 },
  { label: 'Troca de Fluido de Freio', value: 'troca_fluido_freio', intervalKm: 30000, intervalDays: 730 },
  { label: 'Troca de Correia Dentada', value: 'troca_correia_dentada', intervalKm: 60000, intervalDays: 1460 },
];

export default function EditCheckupScreen({ route, navigation }) {
  const { item } = route.params; // Recebendo o item da rota

  const [nextCheck, setNextCheck] = useState(item.nextCheck);
  const [mileage, setMileage] = useState(`${item.mileage.replace(/\s/g, '').replace('km', '')} km`);
  const [selectedMaintenance, setSelectedMaintenance] = useState(item.maintenanceType); // Adicionando o estado para a manutenção selecionada

  const handleMaintenanceChange = (itemValue) => {
    const selectedOption = maintenanceOptions.find(option => option.value === itemValue);
    
    // Atualiza a quilometragem e a próxima troca com base na manutenção selecionada
    setSelectedMaintenance(itemValue);
    
    // Calcula a nova quilometragem e data da próxima troca
    const currentMileage = parseInt(mileage.replace(/\D/g, '')); // Remove caracteres não numéricos
    const newMileage = currentMileage + selectedOption.intervalKm;
    const nextCheckDate = new Date();
    nextCheckDate.setDate(nextCheckDate.getDate() + selectedOption.intervalDays); // Adiciona os dias ao dia atual
    
    setMileage(`${newMileage.toLocaleString()} km`); // Formata a quilometragem com vírgula
    setNextCheck(nextCheckDate.toLocaleDateString('pt-BR')); // Formata a data para o padrão brasileiro
  };

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar as alterações
    Alert.alert('Checkup editado com sucesso!');
    navigation.navigate('CheckupScreen'); // Retorna para a tela de checkup
  };

  const handleDelete = () => {
    // Aqui você pode implementar a lógica para excluir o checkup
    Alert.alert('Checkup excluído com sucesso!');
    navigation.navigate('CheckupScreen'); // Retorna para a tela de checkup
  };

  const handleComplete = () => {
    // Aqui você pode implementar a lógica para marcar o checkup como concluído
    Alert.alert('Checkup concluído com sucesso!');
    navigation.navigate('CheckupScreen'); // Retorna para a tela de checkup
  };

  // Função para formatar a quilometragem
  const handleMileageChange = (value) => {
    // Remove caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');
    // Formata com ponto e adiciona " km" no final
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const fullValue = formattedValue ? `${formattedValue} km` : '';
    setMileage(fullValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Checkup</Text>

      {/* Seletor de Manutenção */}
      <Picker
        selectedValue={selectedMaintenance}
        style={styles.picker}
        onValueChange={handleMaintenanceChange}
      >
        {maintenanceOptions.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Próxima Troca (Data)"
        value={nextCheck}
        onChangeText={setNextCheck}
      />

      <TextInput
        style={styles.input}
        placeholder="Quilometragem Atual"
        value={mileage}
        onChangeText={handleMileageChange} // Chama a nova função de formatação
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>

      {/* Botão de Concluir */}
      <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
        <Text style={styles.completeButtonText}>Concluir</Text>
      </TouchableOpacity>

      {/* Botão de Excluir */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
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
    borderWidth: 2, // Borda de 2 pixels
    borderColor: '#00009C', // Cor azul para a borda
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#00009C',
    borderRadius: 8,
    paddingVertical: 8, // Reduzido para 8
    paddingHorizontal: 16, // Ajuste para manter a largura
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16, // Reduzido para 16
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red', // Cor vermelha para o botão de excluir
    borderRadius: 8,
    paddingVertical: 8, // Reduzido para 8
    paddingHorizontal: 16, // Ajuste para manter a largura
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16, // Reduzido para 16
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: '#00009C', // Cor ciano para o botão de concluir
    borderRadius: 8,
    paddingVertical: 8, // Reduzido para 8
    paddingHorizontal: 16, // Ajuste para manter a largura
    alignItems: 'center',
    marginBottom: 10,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16, // Reduzido para 16
    fontWeight: 'bold',
  },
});
