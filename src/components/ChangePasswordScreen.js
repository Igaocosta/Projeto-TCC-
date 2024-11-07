import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ChangePasswordScreen({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As novas senhas não coincidem.');
      return;
    }

    // Aqui você pode implementar a lógica para alterar a senha, como fazer uma chamada para a API
    Alert.alert('Senha alterada com sucesso!');
    navigation.goBack(); // Retorna para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alterar Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Senha Atual"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry={true} // Oculta o texto da senha
      />

      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={true} // Oculta o texto da senha
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme a Nova Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true} // Oculta o texto da senha
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleChangePassword}>
        <Text style={styles.saveButtonText}>Salvar</Text>
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
    borderWidth: 2,
    borderColor: '#00009C',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
