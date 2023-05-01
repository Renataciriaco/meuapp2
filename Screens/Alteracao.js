import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import axios from 'axios';
//import firebase from 'firebase';
// import FlashMessage from "react-native-flash-message";
// import { showMessage, hideMessage } from "react-native-flash-message";

function AlteracaoScreen({ route, navigation }) {
  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();
  const [getId, setId] = useState();

  // const [novoNome, setNovoNome] = useState(getNome);
  // const [novoEmail, setNovoEmail] = useState(getEmail);
  // const [novoTelefone, setNovoTelefone] = useState(getTelefone);

  useEffect(() => {
    if (route.params) {
        const { nome } = route.params;
        const { email } = route.params;
        const { telefone } = route.params;
        const { cpf } = route.params;
        const { id } = route.params;

        setNome(nome);
        setEmail(email);
        setTelefone(telefone);
        setCpf(cpf);
        setId(id);
    }
  }, []);

  async function inserirDados() {
  
    await axios.post('https://644c548917e2663b9d049ecb.mockapi.io/cliente/', {
      nome: getNome,
      cpf: getCpf,
      telefone: getTelefone,
      email: getEmail,
    }
    )
      .then(function (response) {
        alert("Contato Cadastro com sucesso!")
        navigation.navigate('Lista');
        console.log(response);
      })
      .catch(function (error) {
        // showMessage({
        //   message: "Algum erro aconteceu!",
        //   type: "info",
        // });
        console.log(error);
      });
}

async function excluirDados(){
       axios.delete('https://644c548917e2663b9d049ecb.mockapi.io/cliente/'+getId
      )
      .then(function (response) {
          setNome('')
          setTelefone('')
          setCpf('')
          setEmail('')
          // showMessage({
          //     message: "Registro excluído com sucesso!",
          //     type: "success",
          //   });
          alert('Excluído com sucesso!');
          navigation.navigate('Lista');
        console.log(response);
      })
      .catch(function (error) {
          // showMessage({
          //     message: "Algum erro aconteceu!",
          //     type: "info",
          //   });
          console.log(error);
      });
  }

  async function alterarDados(){
      await axios.put('https://644c548917e2663b9d049ecb.mockapi.io/cliente/'+getId,{
       nome:getNome,
       cpf:getCpf,
       telefone:getTelefone,
       email: getEmail  
      }
      )
      .then(function (response) {
          // showMessage({
          //     message: "Registro alterado com sucesso!",
          //     type: "success",
          //   });
        alert('Alterado com sucesso!');
        console.log(response);
        navigation.navigate('Lista');
      })
      .catch(function (error) {
          // showMessage({
          //     message: "Algum erro aconteceu!",
          //     type: "info",
          //   });
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
            title=""
            onPress={()=>navigation.navigate('Lista')}            
          /> }
          centerComponent={{ text: 'Alterar Contato', style: { color: '#fff', fontSize: 25 } }}
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
      <TouchableOpacity style={styles2.button} onPress={alterarDados}>
        <Text style={styles2.buttonText}>Alterar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles2.button} onPress={excluirDados}>
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