import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const DetalleProducto = () => {
  const { producto } = useLocalSearchParams();
  // Convertimos el parámetro recibido en objeto
  const productoJson = JSON.parse(
    Array.isArray(producto) ? producto[0] : producto || "{}"
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{productoJson.title}</Text>

        <Image source={{ uri: productoJson.image }} style={styles.imagen} />

        <Text style={styles.precio}>
          Precio: ${productoJson.price?.toFixed(2)}
        </Text>

        <Text style={styles.categoria}>Categoría: {productoJson.category}</Text>

        <Text style={styles.descripcion}>{productoJson.description}</Text>

      </View>
    </ScrollView>
  );
};

export default DetalleProducto;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    margin: 50,
  },
  card: {
    width: "80%",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  imagen: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 15,
  },
  precio: {
    fontSize: 22,
    fontWeight: "bold",
  },
  categoria: {
    fontWeight: "bold",
  },
  descripcion: {
    fontSize: 16,
    textAlign: "left",
    color: "#000", 

  },
});
