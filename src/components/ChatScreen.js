import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef(null); // Ref para o FlatList

  const sendMessageToBackend = async (message) => {
    console.log(message);
    setIsLoading(true);
    try {
      const response = await fetch('http://10.0.2.2:5000/api/flow/run_flow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (
        data &&
        data.outputs &&
        data.outputs[0] &&
        data.outputs[0].outputs &&
        data.outputs[0].outputs[0] &&
        data.outputs[0].outputs[0].messages &&
        data.outputs[0].outputs[0].messages[0]
      ) {
        const message = data.outputs[0].outputs[0].messages[0].message;
        console.log(message);

        const botResponse = { id: messages.length + 2, text: message, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } else {
        throw new Error('Estrutura de resposta inesperada do backend.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
      const errorMessage = { id: messages.length + 2, text: 'Erro ao conectar com o servidor.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      // Rolando para o final após a atualização das mensagens
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    console.log(input);
    const newMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    sendMessageToBackend(input);
    setInput('');
    // Rolando para o final após o envio da nova mensagem
    flatListRef.current.scrollToEnd({ animated: true });
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef} // Adiciona a referência aqui
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        style={styles.chatContainer}
        contentContainerStyle={styles.flatListContent} // Adiciona estilo ao conteúdo da FlatList
      />

      {/* Mostra o GIF de carregamento para simbolizar que o bot está digitando */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Image
            source={require('../../assets/gifcar.gif')} // Caminho para o arquivo GIF
            style={styles.loadingGif}
          />
          <Text style={styles.typingText}>O bot está digitando...</Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f0f0f0',
  },
  chatContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20, // Adiciona espaço inferior para o GIF
  },
  flatListContent: {
    paddingBottom: 100, // Adiciona espaço na parte inferior para evitar sobreposição com o GIF
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#00009C',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#00009C',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#00009C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 60, // Ajusta a posição do GIF para que fique acima da barra de entrada
    left: '50%', // Centraliza horizontalmente
    transform: [{ translateX: -40 }], // Ajusta para centralizar o GIF considerando sua largura
    alignItems: 'center', // Centraliza o conteúdo dentro do container
    zIndex: 1,
  },
  loadingGif: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  typingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
    textAlign: 'center', // Centraliza o texto
  },
});

export default ChatScreen;
