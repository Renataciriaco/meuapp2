import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, ListItem, Avatar, Icon } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';
// import{SrcollView} from './react-native-gesture-handler';
import { initializeApp } from "Firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "Firebase/auth";
import { firebaseConfig } from "./Firebase.js";


function ListaScreen({ navigation }) {

  const [list, setList] = useState([]);
  const refresh = useIsFocused();

  const app = initializeApp(firebaseConfig);
  const Auth = getAuth(app);


  useEffect(() => {
    async function listarContatos() {
      const contatos = await axios(
        'https://644c548917e2663b9d049ecb.mockapi.io/cliente/',
      );
      setList(contatos.data);
    }
    listarContatos();
  }, [refresh])


  return (
    <View >
      <Header
        leftComponent={<Button
          icon={
            <Icon
              name="arrow-left"
              size={30}
              color="white"
            />
          }
          title=""
          onPress={() => navigation.navigate('Home')}
        />}
        rightComponent={<Button
          title="+"
          onPress={() => navigation.navigate('Contato')}
        />}
        centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize: 25 } }}
      />

      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Alteracao',
            {
              nome: l.nome,
              telefone: l.telefone,
              email: l.email,
              id: l.id
            })}>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.nome}</ListItem.Title>
              <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
              <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
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

export default ListaScreen;