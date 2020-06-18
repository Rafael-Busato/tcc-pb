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
  const [taxa_adm, setTaxaAdm] = useState('');

  function cadastrar_servico() {
    let dados = {
      servico: servico,
      tp_servico: tp_servico,
      taxa: taxa_adm
    }

    if (servico == "" || tp_servico == "") {
      Alert.alert('É necessário preencher todos os campos.');

    } else {
      fetch('http://192.168.0.110:3000/admin/', {
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

  function alterar_servico() {
    let dados = {
      servico: servico,
      tp_servico: tp_servico,
      taxa: taxa_adm
    }

    if (servico == "" || tp_servico == "") {
      Alert.alert('É necessário preencher todos os campos.');

    } else {
      fetch('http://192.168.0.110:3000/admin/', {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
      }).then(response => {

        if (response.status == 201) {
          Alert.alert('Serviço alterado com sucesso!');

        } else if (response.status == 500) {
          Alert.alert('Serviço não encontrado!');
        }
      });
    }
  }

  function remover_servico() {
    let dados = {
      servico: servico,
      tp_servico: tp_servico,
      taxa_adm: taxa_adm
    }

    if (servico == "" || tp_servico == "") {
      Alert.alert('É necessário preencher todos os campos.');

    } else {
      fetch('http://192.168.0.110:3000/admin/', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
      }).then(response => {

        if (response.status == 201) {
          Alert.alert('Serviço removido com sucesso!');

        } else if (response.status == 500) {
          Alert.alert('Serviço não encontrado!');
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

            <TextInput
              style={styles.input}
              placeholder="Taxa de Administração"
              autoCorrect={false}
              onChangeText={(val) => setTaxaAdm(val)}
            />

            <TouchableOpacity style={styles.btnCadastrar}
              onPress={() => cadastrar_servico()}>
              <Text style={styles.cadastrarText}>Cadastrar Serviço</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnAlterar}
              onPress={() => alterar_servico()}>
              <Text style={styles.cadastrarText}>Alterar Serviço</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRemover}
              onPress={() => remover_servico()}>
              <Text style={styles.cadastrarText}>Remover Serviço</Text>
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
  btnAlterar: {
    marginTop: 15,
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnRemover: {
    marginTop: 15,
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cadastrarText: {
    color: '#FFF',
    fontSize: 18,
  },
});