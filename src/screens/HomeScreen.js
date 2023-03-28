import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title="Go to Settings" />
    </SafeAreaView>
  );
}
