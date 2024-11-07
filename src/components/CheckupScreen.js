import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CheckupScreen() {
  const navigation = useNavigation();

  // Dados de exemplo dos próximos checkups de manutenção
  const checkupData = [
    {
      id: 1,
      item: 'Troca de óleo',
      nextCheck: '2024-11-10',
      mileage: '10.000 km',
    },
    {
      id: 2,
      item: 'Substituição de pneus',
      nextCheck: '2024-12-15',
      mileage: '30.000 km',
    },
    {
      id: 3,
      item: 'Verificação dos freios',
      nextCheck: '2025-01-05',
      mileage: '15.000 km',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos Checkups de Manutenção</Text>

      <ScrollView style={styles.scrollView}>
        {checkupData.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.row}>
              <FontAwesome5 name="tools" size={24} color="#00009C" />
              <Text style={styles.itemName}>{item.item}</Text>
            </View>
            <Text style={styles.text}>Próxima Troca: {item.nextCheck}</Text>
            <Text style={styles.text}>Quilometragem Estimada: {item.mileage}</Text>
            
            {/* Botão para editar checkup */}
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate('EditCheckup', { item })} // Navegue para a tela de edição passando o item
            >
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Botão para agendar novo checkup */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AgendCheckup')}
      >
        <Text style={styles.addButtonText}>Agendar</Text>
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
  scrollView: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#00009C',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#00009C',
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
  editButton: {
    backgroundColor: '#00009C',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
