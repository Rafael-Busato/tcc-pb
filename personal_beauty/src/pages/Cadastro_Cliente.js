import React, { Component } from 'react';

import { View, 
         KeyboardAvoidingView,
         Image,
         StyleSheet,
         Text,
         TextInput,
         TouchableOpacity,
         Button } from 'react-native';

export default function Cadastro_Cliente() {
    return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="CPF"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

      <TouchableOpacity style={styles.btnCadastrar}>
          <Text style={styles.cadastrarText}>Cadastrar</Text>
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
    btnCadastrar: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    cadastrarText: {
        fontSize: 18,
    },
  });