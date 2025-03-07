import {FlatList,StyleSheet,Text,TouchableOpacity,View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const categorias = [
  { id: "electronics", name: "Electrónica" },
  { id: "jewelery", name: "Joyería" },
  { id: "men's clothing", name: "Ropa Hombre" },
  { id: "women's clothing", name: "Ropa Mujer" },
];

const Categorias = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorías productos</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push(`/productos/productos?categoria=${item.id}`)
            }
          >
            <Text style={styles.texto}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categorias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
        alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
      marginBottom: 10,
      marginTop: 30
    
  },
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#000",
    width: "100%",
    alignItems: "flex-start",
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
