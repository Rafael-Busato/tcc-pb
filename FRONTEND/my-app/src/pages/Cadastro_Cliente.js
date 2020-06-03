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

export default function Cadastro_Client() {
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [data_nasc, setDtNasc] = useState('');
  const [cartao_credito, setCartaoCred] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  function cadastrar() {
    let dados = {
      cpf: cpf,
      email: email,
      senha: senha,
      nome: nome,
      sobrenome: sobrenome,
      data_nasc: data_nasc,
      cartao_credito: cartao_credito,
      endereco: endereco,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
    }

    if (cpf == "" || email == "" || senha == "" || nome == "" || sobrenome == ""
      || data_nasc == "" || cartao_credito == "" || endereco == "" || bairro == "" ||
      cidade == "" || estado == "") {
      Alert.alert('Preencha todos os campos para cadastrar-se.');

    } else {
      fetch('http://172.20.10.2:3000/cliente/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
      }).then(response => {
        if (response.status == 201) {
          Alert.alert('Cadastro realizado com sucesso!');

        } else if (response.status == 500) {
          Alert.alert('Cliente já cadastrado!');
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
              placeholder="CPF"
              keyboardType='numeric'
              autoCorrect={false}
              onChangeText={(val) => setCPF(val)}
            />

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

            <TextInput
              style={styles.input}
              placeholder="Nome"
              autoCorrect={false}
              onChangeText={(val) => setNome(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              autoCorrect={false}
              onChangeText={(val) => setSobrenome(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="Data de Nascimento"
              keyboardType='numeric'
              autoCorrect={false}
              onChangeText={(val) => setDtNasc(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="N° Cartão de Crédito"
              keyboardType='numeric'
              autoCorrect={false}
              onChangeText={(val) => setCartaoCred(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="Endereço"
              autoCorrect={false}
              onChangeText={(val) => setEndereco(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="Bairro"
              autoCorrect={false}
              onChangeText={(val) => setBairro(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="Cidade"
              autoCorrect={false}
              onChangeText={(val) => setCidade(val)}
            />

            <TextInput
              style={styles.input}
              placeholder="Estado"
              autoCorrect={false}
              onChangeText={(val) => setEstado(val)}
            />

            <TouchableOpacity style={styles.btnCadastrar}
              onPress={() => cadastrar()}>
              <Text style={styles.cadastrarText}>Cadastrar-se</Text>
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