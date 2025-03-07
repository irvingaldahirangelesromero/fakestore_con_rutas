import React, { useState } from "react";
import {StyleSheet,Text,TextInput,View,TouchableOpacity,Alert,ActivityIndicator,
} from "react-native";
import { Link, useRouter } from "expo-router";

const API_URL = "https://fakestoreapi.com/users";

const Index = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const router = useRouter();
  
  const handleLogin = async () => {
    if (nombre.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error al conectar con la API");
      }

      const users = await response.json();
      const userFound = users.find(
        (user) => user.username === nombre && user.password === password
      );

      if (userFound) {
        setAuthSuccess(true);
        router.push("./(tabs)/");
      } 
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.labels}>Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          placeholderTextColor="#8c8c8c"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.labels}>Contraseña</Text>

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#8c8c8c"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          )}
        </TouchableOpacity>

        {authSuccess && false && (
          <Link href={"./(tabs)/"} style={styles.link}>
            Continuar a la aplicación
          </Link>
        )}
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  labels: {
    flex: 1,
    justifyContent: "flex-start",
    textAlign: "left",
    color: "#000",
    fontSize: 16,
    marginBottom: 5,
    alignItems: "flex-start",
    width: "100%",

  },
  container: {
    flex: 1,
    backgroundColor: "#f4f7fc",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#eee",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    width: "100%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "#4a90e2",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
