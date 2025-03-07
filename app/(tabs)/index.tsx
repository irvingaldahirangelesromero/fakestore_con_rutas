import {ActivityIndicator,FlatList,Image,StyleSheet,Text,View,TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter, useLocalSearchParams } from "expo-router";

const Productos = () => {
  const router = useRouter();
  const { categoria } = useLocalSearchParams();

  type Producto = {
    id: number;
    title: string;
    price?: number;
    description: string;
    category?: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  };

  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const consultarProductos = async () => {
      setCargando(true);
      try {
        let url = "https://fakestoreapi.com/products";
        if (categoria) {
          url = `https://fakestoreapi.com/products/category/${categoria}`;
        }
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error(`Error al realizar la petición: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        setProductos(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setCargando(false);
      }
    };

    consultarProductos();
  }, [categoria]);

  // Componente de Producto tarjeta
  const ProductoItem = (props: Producto) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <Text style={styles.productTitle}>{props.title}</Text>
        <Text style={styles.price}>${props.price?.toFixed(2)}</Text>
        <Text style={styles.description}>
          {props.description.substring(0, 60)}...
        </Text>
        <Link
          href={{
            pathname: `../productos/${props.id}`,
            params: { producto: JSON.stringify(props) },
          }}
          asChild
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Detalles del producto</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {categoria ? `Productos de ${categoria}` : "Productos"}
      </Text>
      {cargando ? (
        <View style={styles.loadscreen}>
          <Text style={styles.titulo}>Cargando Datos...</Text>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <FlatList
          data={productos}
          renderItem={({ item }) => (
            <ProductoItem
              title={item.title}
              description={item.description}
              image={item.image}
              id={item.id}
              price={item.price}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          // Indicamos que deseamos 2 columnas para el grid
          numColumns={2}
          contentContainerStyle={styles.flatlist}
        />
      )}
    </View>
  );
};

export default Productos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Fondo blanco
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  loadscreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    // Texto negro
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  flatlist: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
