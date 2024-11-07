import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ConfigScreen() {
  const navigation = useNavigation();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled((previousState) => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <ScrollView style={styles.scrollView}>
        {/* Opção para notificações */}
        <View style={styles.optionRow}>
          <FontAwesome5 name="bell" size={24} color="black" />
          <Text style={styles.optionText}>Notificações</Text>
          <Switch
            onValueChange={toggleNotifications}
            value={isNotificationsEnabled}
            style={styles.switch}
          />
        </View>

        {/* Opção para modo escuro */}
        <View style={styles.optionRow}>
          <FontAwesome5 name="moon" size={24} color="black" />
          <Text style={styles.optionText}>Modo Escuro</Text>
          <Switch
            onValueChange={toggleDarkMode}
            value={isDarkModeEnabled}
            style={styles.switch}
          />
        </View>

        {/* Opção para editar perfil */}
        <TouchableOpacity
          style={styles.optionRow}
          onPress={() => navigation.navigate('EditProfileScreen')} // Navega para tela de edição de perfil
        >
          <FontAwesome5 name="user" size={24} color="black" />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>

        {/* Opção para alterar senha */}
        <TouchableOpacity
          style={styles.optionRow}
          onPress={() => navigation.navigate('ChangePasswordScreen')} // Navega para tela de alteração de senha
        >
          <FontAwesome5 name="lock" size={24} color="black" />
          <Text style={styles.optionText}>Alterar Senha</Text>
        </TouchableOpacity>

        {/* Botão de logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
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
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#00009C',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    color: '#333',
  },
  switch: {
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#00009C',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
