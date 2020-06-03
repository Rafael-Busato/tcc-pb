import React, { Component } from 'react';

import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Tipo({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.btnCliente}
          onPress={() => navigation.navigate('Cadastro_Cliente')}>
          <Text style={styles.clienteText}>Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPersonal}
          onPress={() => {}}>
          <Text style={styles.personalText}>Personal</Text>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  btnCliente: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  clienteText: {
    color: '#FFF',
    fontSize: 18,
  },
  personalText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnPersonal: {
    marginTop: 10,
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  funcionarioText: {
    fontSize: 18,
  }
});