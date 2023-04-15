import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Header, Icon  } from 'react-native-elements';


const ContatoScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSignUp = () => {
    // implemente aqui a lógica de cadastro de usuário
  };

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
          title="<-"
          onPress={()=>navigation.navigate('Alteracao')}            
        /> }
        centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize: 25 } }}
    />
  
    <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
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
        secureTextEntry
        value={telefone}
        onChangeText={setTelefone}
      />
      <Button title="Alterar" onPress={handleSignUp} />
      <Button title="Excluir" onPress={handleSignUp} />
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