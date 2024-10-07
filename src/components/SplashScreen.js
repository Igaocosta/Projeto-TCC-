import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    // Transição para a tela de login após 3 segundos
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Substitui a tela atual pela de login
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer quando o componente é desmontado
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Frotalize.png')} style={styles.icon} />
      {/* Aqui você pode adicionar uma animação, logo, ou imagem */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  icon: {
    width: 500,
    height: 500,
    marginBottom: 10,
  }
});