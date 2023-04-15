import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import {  Avatar } from 'react-native-elements';


function LoginScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

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
      <Button title="Login" onPress={()=>navigation.navigate('Lista')} />
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
