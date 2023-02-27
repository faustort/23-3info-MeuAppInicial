//Criar um componente ButtonDivertido personalizado, aplicando estilos de forma a torná-lo mais atraente e adicionar um ícone.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonDivertido = ({ onPress }) => {
    return (
        <View style={styles.button}>
            <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={onPress}>
                <Text style={{ fontFamily: 'Arial', fontSize: 15, color: '#fff' }}>
                    Login com Facebook
                </Text>
            </Icon.Button>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});

export default ButtonDivertido;
