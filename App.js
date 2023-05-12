import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
          <Image style={styles.logo0} source={require('./assets/logodiscord.png')} />
      <Image style={styles.logo} source={require('./assets/discord1.png')} />
      <Text style={styles.title}>Bem vindo (ou vinda) ao Discord</Text>
            <Text style={styles.text}>Junte-se a mais de 100 milhoẽs de pessoas {'\n'} que usam o Discord para conversar com seus {'\n'} amigos e comunidade</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}    
        onPress={() => navigation.navigate('RegistrarTele')}
          >
          <Text style={styles.buttonText1}>Registre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}        
        onPress={() => navigation.navigate('Entrar')}
        >
          <Text style={styles.buttonText2}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}


function Tela2({ navigation }) {
  return (
<View style={styles.container}>
      <Text style={styles.title}>Boas-vindas de volta!</Text>
      <Text style={styles.text}>Estamos muito animados em te ver novamente!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Informações da conta</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail ou número de telefone"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />
      </View>
      <TouchableOpacity>         
      <Text style={styles.text2}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity>         
        <Text style={styles.text2}>Utilizar um gerenciador de senhas?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function Tela3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Insira seu telefone ou e-mail</Text>
      <View style={styles.buttonLogin}>
        <TouchableOpacity style={styles.buttonL}>
          <Text style={styles.buttonTextL}>Telefone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonL2}
        onPress={() => navigation.navigate('RegistrarEmail')}
        >
          <Text style={styles.buttonTextL}>E-mail</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>NÚMERO DE TELEFONE</Text>
      <View style={styles.inputContainer2}>
        <TextInput
          style={styles.input1}
          placeholder="DD"
        />
        <TextInput
          style={styles.input2}
          placeholder="Numero"
        />
      </View>
      <TouchableOpacity>         
        <Text style={styles.text2}>Leia nossa política de privacidade</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function Tela4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Insira seu telefone ou e-mail</Text>
      <View style={styles.buttonLogin}>
        <TouchableOpacity style={styles.buttonL3}
        onPress={() => navigation.navigate('RegistrarTele')}        
        >
          <Text style={styles.buttonTextL}>Telefone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonL4}>
          <Text style={styles.buttonTextL}>E-mail</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label2}>E-MAIL</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
        />
      </View>
      <TouchableOpacity>         
        <Text style={styles.text2}>Leia nossa política de privacidade</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Entrar e registrar" component={Tela1} />
        <Stack.Screen name="Entrar" component={Tela2} />
        <Stack.Screen name="RegistrarTele" component={Tela3} />
        <Stack.Screen name="RegistrarEmail" component={Tela4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#363940',
    padding: 8,
    alignItems: 'center',
  },
  logo0: {
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
  logo: {
    width: 230,
    height: 250,
    marginBottom: 16,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
    color: 'lightgray',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#5969e8',
    padding: 10,
    margin: 8,
    borderRadius: 5,
    width: 300,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
    button2: {
    backgroundColor: '#3d3d47',
    padding: 10,
    margin: 8,
    borderRadius: 5,
    width: 300,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
 


  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#bbbabc',
    paddingLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: -110,
  },
  label2: {
    fontSize: 16,
    color: '#bbbabc',
    paddingLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: -250,
  },
  input: {
    backgroundColor: '#212325',
    padding: 10,
    margin: 8,
    marginBottom: 0,
    borderRadius: 5,
    width: 300,
    color: '#87888c'
  },
  text2: {
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 10,
    textAlign: 'center',
    color: '#4aabea',
  },




  title2: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonL: {
    backgroundColor: '#3b3d40',
    padding: 5,
    marginTop: 12,
    marginBottom: 26,
    borderRadius: 2,
    width: 150,
  },
  buttonL2: {
    backgroundColor: '#212325',
    padding: 5,
    marginTop: 12,
    marginBottom: 26,
    borderRadius: 2,
    width: 150,
  },

    buttonL3: {
    backgroundColor: '#212325',
    padding: 5,
    marginTop: 12,
    marginBottom: 26,
    borderRadius: 2,
    width: 150,
  },
  buttonL4: {
    backgroundColor: '#3b3d40',
    padding: 5,
    marginTop: 12,
    marginBottom: 26,
    borderRadius: 2,
    width: 150,
  },
  buttonTextL: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  inputContainer2: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
    width: 300,
  },
  input1: {
    backgroundColor: '#212325',
    padding: 10,
    marginTop: 8,
    marginRight: 2,
    borderRadius: 5,
    width: 50,
    color: '#87888c'
  },
  input2: {
    backgroundColor: '#212325',
    padding: 10,
    marginTop: 8,
    borderRadius: 5,
    width: 250,
    color: '#87888c'
  },
});