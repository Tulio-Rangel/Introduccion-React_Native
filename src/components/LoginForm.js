import React from "react";
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Send" onPress={() => console.log("Enviado")} />
    </View>
  );
}
