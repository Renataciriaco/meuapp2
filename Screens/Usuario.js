import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Header, Icon  } from 'react-native-elements';
import axios from 'axios';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './Firebase.js';

const app = initializeApp (firebaseConfig);
const analytics = getAnalytics(app);

const UsuarioScreen = ({navigation}) => {
  // const [nome, setName] = useState('');
  // const [cpf, setCpf] = useState('');
  // const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  function cadastrarUsuario(){
    if((email, password) !== ''){
        const auth = getAuth ();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            alert("Usuário Cadastrado!")
            navigation.navigate('Home');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode + errorMessage);
          });
      }else{
        alert('Favor digitar login e senha!');
      }
      
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
          onPress={()=>navigation.navigate('Home')}            
        /> }
        centerComponent={{ text: 'Usuário', style: { color: '#fff', fontSize: 25 } }}
    />
  
    {/* <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        maxLength={11}
        value={cpf}
        onChangeText={setCpf}
      /> */}
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
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Cadastrar" onPress={cadastrarUsuario} />
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

export default UsuarioScreen;
