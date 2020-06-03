import React, { Component, useState } from 'react';

import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
} from 'react-native';

import api from '../../services/api';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Admin() {
  const [servico, setServico] = useState('');
  const [tp_servico, setTpServico] = useState('');

  function cadastrar_servico() {
    let dados = {
        servico: servico,
        tp_servico: tp_servico,
    }

    if (servico == "" || tp_servico == "") {
      Alert.alert('É necessário preencher todos os campos.');

    } else {
      fetch('http://172.20.10.2:3000/admin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
      }).then(response => {
          
        if (response.status == 201) {
          Alert.alert('Serviço cadastrado com sucesso!');

        } else if (response.status == 500) {
          Alert.alert('Serviço já cadastrado!');
        }
      });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.view}>

            <TextInput
              style={styles.input}
              placeholder="Serviço"
              autoCorrect={false}
              onChangeText={(val) => setServico(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="Tipo de Serviço"
              autoCorrect={false}
              onChangeText={(val) => setTpServico(val)}
            />

            <TouchableOpacity style={styles.btnCadastrar}
              onPress={() => cadastrar_servico()}>
              <Text style={styles.cadastrarText}>Cadastrar Serviço</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
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
  container: {
    flex: 1,
    paddingTop: 35,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '90%',
  },
  scroll: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
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
  btnCadastrar: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  cadastrarText: {
    color: '#FFF',
    fontSize: 18,
  },
});