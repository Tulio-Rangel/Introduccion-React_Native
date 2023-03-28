import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Saludar name="Tulio" />
      <Saludar name="Laura" />
      <Saludar name="Mafe" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});