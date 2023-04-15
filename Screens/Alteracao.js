import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';

function AlteracaoScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getId, setId] = useState();

  // const [novoNome, setNovoNome] = useState(getNome);
  // const [novoEmail, setNovoEmail] = useState(getEmail);
  // const [novoTelefone, setNovoTelefone] = useState(getTelefone);

  useEffect(() => {
    if (route.params) {
        const { nome } = route.params;
        const { email } = route.params;
        const { telefone } = route.params;
        const { id } = route.params;

        setNome(nome);
        setEmail(email);
        setTelefone(telefone);
        setId(id);
    }
  }, []);

  function alterar() {
    const propriedadesAtualizadas = { nome: getNome, email: getEmail, telefone: getTelefone };
    atualizarContato(getId, propriedadesAtualizadas);
    alert("Contato Alterado com sucesso!")
    navigation.navigate('Lista');
  }

  function excluir() {
    removerContato(getId);
    limparCampos();
    alert("Contato Removido com sucesso!")
    navigation.navigate('Lista');
  }

  function limparCampos() {
    setNome(null);
    setEmail(null);
    setTelefone(null);
    setId(null);
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
            title=""
            onPress={()=>navigation.navigate('Lista')}            
          /> }
          centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize: 25 } }}
      />
      <View style={styles2.container}>    
      
      <TextInput
        style={styles2.input}
        placeholder="Nome"
        value={getNome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles2.input}
        placeholder="Email"
        keyboardType="email-address"
        value={getEmail}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles2.input}
        placeholder="Telefone"
        value={getTelefone}
        onChangeText={setTelefone}
      />
      <TouchableOpacity style={styles2.button} onPress={alterar}>
        <Text style={styles2.buttonText}>Alterar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles2.button} onPress={excluir}>
        <Text style={styles2.buttonText}>Excluir</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingTop: 40
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlteracaoScreen;