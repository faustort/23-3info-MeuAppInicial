import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home1" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen} />
        <Stack.Screen name="Home3" component={HomeScreen} />
        <Stack.Screen name="Home4" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




function HomeScreen() {
  return (
    <View>
      <Text>Sou a HomeScreen</Text>
      <Image
        source={
          {
            uri: 'https://picsum.photos/300/300'
          }
        }
        style={
          {
            height: '300px',
            width: '300px'
          }
        }
      />
      <Image
        source={require('./assets/capivara.webp')}
        style={{ width: '300px', height: '300px' }}
      />
    </View>
  );
}
// SobreScreen
// Seu nome e um oi e uma frase de impacto!
// ContatoScreen
// Um página de contato informando como falar com você
// SurpresaScreen
// O que você desejar inserir nesta página e SE CONSEGUIR uma imagem.
// Ref imagem: https://reactnative.dev/docs/image

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






















export function HelloUser() {

  const user = {
    primeiroNome: 'Luiz Carlos',
    sobrenome: 'Silva',
  }

  function formatName(user) {
    return user.primeiroNome + ' ' + user.sobrenome;
  }

  return (
    <Text>Olá, {formatName(user)}!</Text>
  )

}




export function componenteExemplo() {
  const name = 'Nome Maravilhoso da Silva';
  return (
    <Text>Nome {{ name }}</Text>
  )
}

const componenteExemplo = ()