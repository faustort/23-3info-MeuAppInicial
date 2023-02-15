import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
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
