import React, { useContext } from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../../context/AuthContext";
import AuthForm from "../../components/AuthForm";

import { Entypo } from "@expo/vector-icons";

const SignupScreen = ({}) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text style={styles.text}> Create Student Account</Text>
      <Entypo name="book" size={150} style={styles.icon} color="black" />
      <AuthForm
        headerText="Signup for SEI"
        errorMessage={state.errorMessage}
        submitButtonText="Signup"
        onSubmit={signup}
      />
    </View>
  );
};
SignupScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 90,
    color: "#03254c",
  },
});
export default SignupScreen;
