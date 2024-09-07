// src/components/CarouselButtons.js
import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Importar imagens
import icon1 from '../../assets/messenger.png';
import icon2 from '../../assets/placeholder.png';
import icon3 from '../../assets/tools.png';
import icon4 from '../../assets/document.png';
import icon5 from '../../assets/engineer.png';
// import icon6 from '../assets/icon6.png';

const CarouselButtons = () => {
  const buttons = [
    { id: 1, image: icon1 },
    { id: 2, image: icon2 },
    { id: 3, image: icon3 },
    { id: 4, image: icon4 },
    { id: 5, image: icon5 },
    // { id: 6, image: icon6 },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
      {buttons.map((button) => (
        <TouchableOpacity key={button.id} style={styles.button}>
          <Image source={button.image} style={styles.icon} />
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
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default CarouselButtons;