// src/components/CarouselButtons.js
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Certifique-se de que o pacote expo/vector-icons está instalado
import { useNavigation } from '@react-navigation/native'; // Use o hook useNavigation

const CarouselButtons = () => {
  const navigation = useNavigation(); // Obtenha navigation usando o hook

  const buttons = [
    { id: 1, icon: 'comment-dots', screen: 'Chatbot' },
    { id: 2, icon: 'map-marker-alt', screen: 'Maps' },  
    { id: 3, icon: 'tools', screen: 'Checkup' },
    { id: 4, icon: 'file-alt', screen: 'Details' },
    // { id: 5, icon: 'cogs' , screen: 'Chatbot'},
    // Adicione mais ícones aqui se necessário
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
      {buttons.map((button) => (
        <TouchableOpacity key={button.id} style={styles.button} onPress={() => navigation.navigate(button.screen)}>
          <FontAwesome5 name={button.icon} size={30} color="#fff" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: 63,
    height: 63,
    borderRadius: 31,
    backgroundColor: '#00009C',
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default CarouselButtons;
