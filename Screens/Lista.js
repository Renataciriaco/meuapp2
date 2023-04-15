import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Header, ListItem, Avatar, Icon  } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';

function ListaScreen({ navigation }) {

  const [list, setList] = useState([]);

  useEffect(() => {

    async function consultarDados() {

      await axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
        setList(response.data);
          console.log(response.data)
        }).catch(function (error) {
          console.log(error);

        });

    }
        consultarDados();
  }, [])
  

  return (
    <View >
      <Header
        leftComponent={ <Button
          icon={
            <Icon
              name="arrow-left"
              size={30}
              color="white"
            />
          }
          title="<"
          onPress={()=>navigation.navigate('Home')}            
        /> }
        rightComponent={<Button
          title="+"
          onPress={() => navigation.navigate('Contato')}
        />}
        centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize: 25 } }}
      />

        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={()=> navigation.navigate('Alteracao',
            {
                nome: l.nome,
                telefone: l.telefone,
                email: l.email,
                id: l.id
            })}>
              <Avatar source={{ uri: l.avatar_url }}  />
              <ListItem.Content>
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
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

export default ListaScreen;