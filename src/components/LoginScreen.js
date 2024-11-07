import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulação de login
    if (email === 'admin@admin.com' && password === 'admin') {
      Alert.alert('Sucesso');
      // Navegar para a tela principal (Dashboard)
      navigation.navigate('Home');
    } else {
      Alert.alert('Usuário e/ou senha inválidos');
    }
  };

  const handleRegister = () => {
    // Navega para a tela de cadastro de usuário
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* Adicionando uma imagem acima do título */}
      <Image
        source={require('../../assets/Frotalize.png')} // Adicione a imagem correta no diretório assets
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#00009C" />
      </View>

      {/* Botão Cadastrar Usuário estilizado como o de Login */}
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar " onPress={handleRegister} color="#00009C" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 30,
    borderRadius: 175,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00009C',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#00009C',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
});
