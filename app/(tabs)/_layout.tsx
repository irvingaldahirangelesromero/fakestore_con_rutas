import { Tabs } from "expo-router";

export default function tabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Productos",
        }}
      />
      <Tabs.Screen
        name="Categorias"
        options={{
          title: "Categorias",
        }}
      />
      <Tabs.Screen name="setings" />
    </Tabs>
  );
}
