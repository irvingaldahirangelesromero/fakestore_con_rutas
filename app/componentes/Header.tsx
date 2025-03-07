import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

type propiedades = {
    titulo: string,
    nombre: string,
    imagen: any,
}

const Header = (props:propiedades) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={props.imagen} style={styles.Imagen} />
            </View>
            <View>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text> {props.nombre}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
    },
    container2: {
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    titulo: {
        fontSize: 20,
        fontWeight:'bold',
    },
    Imagen: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
    },

})

