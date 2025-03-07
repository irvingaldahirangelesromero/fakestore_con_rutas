import { StyleSheet, Text, View } from "react-native";
import React from "react";

type propiedades = {
    fecha: string,
    grupo: string,
}

const Footer = (props:propiedades) => {
    return (
        <View style={styles.container}>
            <Text>Fecha: {props.fecha}</Text>
            <Text>Grupo: {props.grupo}</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
}

})

