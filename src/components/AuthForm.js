import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  return (
    <>
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <Input
        secureTextEntry
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          style={styles.button}
          onPress={() => onSubmit({ email, password })}
          title={submitButtonText}
        ></Button>
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
  },
  button: {
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    fontSize: 40,
    color: "#0065a2",
  },
});

export default AuthForm;
