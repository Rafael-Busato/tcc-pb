import React, { Component } from 'react';

import { View, 
         KeyboardAvoidingView,
         Image,
         StyleSheet,
         Text,
         TextInput,
         TouchableOpacity,
         Button } from 'react-native';

export default function Tipo({ navigation }) {
    return (
        
      <KeyboardAvoidingView style={styles.background}>

          <View style={styles.container}>

      <TouchableOpacity style={styles.btnCliente}
                        onPress={() => navigation.navigate('Cadastro_Cliente')}>
          <Text style={styles.clienteText}>Cliente</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.btnFuncionario}>
        <Text style={styles.clienteText}>Funcionário</Text>
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
        fontSize: 18,
    },
    btnFuncionario: {
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