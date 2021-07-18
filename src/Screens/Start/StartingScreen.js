import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import CustomButton from "../../components/CustomButton";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "../../navigationref";
const StartingScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 40, alignSelf: "center" }}>
        Smart Educational Intitute
      </Text>
      <FontAwesomeIcon icon={faUserGraduate} style={styles.icon} size={200} />
      <CustomButton
        onPress={() => navigate("AdminSignin")}
        buttontext="Admin Signin"
      />
      <CustomButton
        onPress={() => navigate("StudentSignin")}
        buttontext="Student Signin"
      />
    </View>
  );
};
StartingScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 5,
  },
  button: {
    alignItems: "center",
    marginTop: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "white",
  },
  icon: {
    marginLeft: 77,
    color: "#03254c",
  },
});

export default StartingScreen;
