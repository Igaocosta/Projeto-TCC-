import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen() {
  const navigation = useNavigation();

  // Dados de exemplo da manutenção de veículos
  const maintenanceData = [
    {
      id: 1,
      vehicleName: 'Caminhão X',
      lastServiceDate: '2024-09-25',
      serviceType: 'Troca de óleo',
      status: 'Concluído',
    },
    {
      id: 2,
      vehicleName: 'Van Y',
      lastServiceDate: '2024-10-01',
      serviceType: 'Substituição de pneu',
      status: 'Pendente',
    },
    {
      id: 3,
      vehicleName: 'Carro Z',
      lastServiceDate: '2024-09-28',
      serviceType: 'Revisão geral',
      status: 'Concluído',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório de Manutenções</Text>

      <ScrollView style={styles.scrollView}>
        {maintenanceData.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.row}>
              <FontAwesome5 name="truck" size={24} color="#00009C" />
              <Text style={styles.vehicleName}>{item.vehicleName}</Text>
            </View>
            <Text style={styles.text}>Última Manutenção: {item.lastServiceDate}</Text>
            <Text style={styles.text}>Serviço: {item.serviceType}</Text>
            <Text style={styles.text}>Status: {item.status}</Text>
          </View>
        ))}
      </ScrollView>
        
      {/* Botão para adicionar nova manutenção */}
      {/*<TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMaintenance')}
      >
        <Text style={styles.addButtonText}>Adicionar Manutenção</Text>
      </TouchableOpacity>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fundo igual à tela de login
    padding: 20,
  },
  title: {
    fontSize: 28, // Estilo de título igual ao da tela de login
    fontWeight: 'bold',
    color: '#00009C',
    marginBottom: 24,
    textAlign: 'center',
  },
  scrollView: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#00009C', // Mesma cor de borda da tela de checkups
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  vehicleName: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#28a745', // Mesma cor de botão da tela de checkups
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
