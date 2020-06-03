import React, { Component, useState, useCallback } from 'react';

import {
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    if (email == "") {
      Alert.alert('Preencha o campo Email!');

    } else if (senha == "") {
      Alert.alert('Preencha o campo Senha!');

    } else if (email == "admin" && senha == "admin") {
      navigation.navigate('Admin');

    } else {
      const options = {
        method: 'GET',
        mode: 'CORS',
        cache: 'false'
      }

      await fetch(`http://172.20.10.2:3000/cliente/${email}/${senha}`, options)
        .then(async response => {
          const data = await response.json();

          if (data.response == "") {
            Alert.alert('Email ou Senha incorretos!');
          } else {
            Alert.alert('Seja Bem-Vindo!');
          }

        })

    }
  }

  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(val) => setEmail(val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(val) => setSenha(val)}
        />

        <TouchableOpacity style={styles.btnAcessar}
          onPress={() => login()}>
          <Text style={styles.acessarText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btncriarConta}
          onPress={() => navigation.navigate('Tipo')}>
          <Text style={styles.criarcontaText}>Criar Conta gratuita</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnAcessar: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  acessarText: {
    color: '#FFF',
    fontSize: 18,
  },
  btncriarConta: {
    marginTop: 10,
  },
  criarcontaText: {
    color: '#FFF',
  }
});