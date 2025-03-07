import { StyleSheet, Text, View } from "react-native";
import React from "react";

const setings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>setings</Text>
    </View>
  );
};

export default setings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    fontSize: 16,
    textDecorationLine: "underline",
    marginTop: 20,
    textAlign: "center",
  },
});
