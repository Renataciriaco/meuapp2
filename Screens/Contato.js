import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Header, Icon  } from 'react-native-elements';
import axios from 'axios';
//import firebase from 'firebase';


function ContatoScreen ({ route, navigation}) {
  const [nome, setNome] = useState('');
  const [cpf,setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function inserirDados() {
    
    await axios.post('https://644c548917e2663b9d049ecb.mockapi.io/cliente/', {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
    }
    )
      .then(function (response) {
        alert('Cadastrado com sucesso!');
        navigation.navigate('Lista');
        console.log(response);
      })
      .catch(function (error) {
        showMessage({
          message: "Algum erro aconteceu!",
          type: "info",
        });
        console.log(error);
      });
}

  return (
    <View >
    
    <Header
        leftComponent={ <Button
          icon={
            <Icon
              name="arrow-left"
              size={25}
              color="white"
            />
          }
          title="<"
          onPress={()=>navigation.navigate('Lista')}            
        /> }
        rightComponent={<Button
          title="+"
          onPress={() => navigation.navigate('Alteracao')}
          />}
        centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize: 25 } }}
    />
  
    <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="cpf-address"
        autoCapitalize="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />

      <Button title="Salvar" onPress={inserirDados} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default ContatoScreen;