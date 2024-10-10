import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Certifique-se de que o pacote expo/vector-icons está instalado
import { useNavigation } from '@react-navigation/native'; // Use o hook useNavigation

export default function CheckupScreen()  {
  const navigation = useNavigation();


  return(
    <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}></ScrollView>
        <Text>Teste</Text>
    </View>
  )
}