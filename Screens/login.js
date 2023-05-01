import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import {  Avatar } from 'react-native-elements';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './Firebase.js';

const app = initializeApp (firebaseConfig);
const analytics = getAnalytics(app);

function LoginScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function login(){
    if((email, password) !== ''){
      const auth = getAuth ();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Login com sucesso!")
          navigation.navigate('Lista');
        })
        .catch((error) => {
          alert('Login ou Senha inválidos!');
        });
    }else{
      alert('Favor digitar login e senha!');
    }
    
  }


  return (

    <View style={styles.container}>

      <Avatar
      size="large"
      rounded
      source={{
      uri:
      '	https://img.freepik.com/vetores-premium/o-avatar-d…ra-um-protetor-de-tela-com-emocoes_505620-617.jpg',
  }}
/>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry />
      <Button title="Login" onPress={login} />
      <Button title="Cadastre-se" onPress={()=>navigation.navigate('Usuario')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
