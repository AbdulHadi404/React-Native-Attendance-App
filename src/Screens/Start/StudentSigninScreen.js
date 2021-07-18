import React, { useContext } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../../components/AuthForm";
import Spacer from "../../components/Spacer";
import { Context } from "../../context/AuthContext";
import { Entypo } from "@expo/vector-icons";
const StudentSigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text style={styles.text}>Sign1in as Student</Text>
      <Spacer></Spacer>
      <Entypo name="book" size={200} style={styles.icon} />
      <AuthForm
        errorMessage={state.errorMessage}
        submitButtonText="Signin"
        onSubmit={signin}
      />
    </View>
  );
};
StudentSigninScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  text: { fontSize: 40, alignSelf: "center" },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    marginLeft: 90,
    color: "#03254c",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 5,
  },
});
export default StudentSigninScreen;
