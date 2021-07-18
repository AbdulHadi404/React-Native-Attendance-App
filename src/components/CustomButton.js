import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { navigate } from "../navigationref";
export default function CustomButton({ onPress, buttontext }) {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Spacer></Spacer>
      <Button title={buttontext} onPress={onPress}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: 15,
    borderWidth: 2,
    color: "blue",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 40,
    color: "#0065a2",
  },
});
