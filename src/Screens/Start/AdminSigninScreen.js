import React, { useState } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Text, Input } from "react-native-elements";
import Spacer from "../../components/Spacer";
import CustomButton from "../../components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { navigate } from "../../navigationref";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
const AdminSigninScreen = (navigation) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signin as admin</Text>
      <FontAwesomeIcon icon={faUserCog} style={styles.icon} size={200} />
      <Spacer></Spacer>
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

      <Spacer>
        <CustomButton
          buttontext="Sign in"
          onPress={() => adminlogin(email, password)}
        />
      </Spacer>
    </View>
  );
};
const adminlogin = (email, password) => {
  if (email === "admin" && password === "secret") {
    navigate("Adminmenu");
  } else {
    alert("Invalid User and password");
  }
};
AdminSigninScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 5,
  },
  icon: {
    marginLeft: 77,
    color: "#03254c",
  },
});
export default AdminSigninScreen;
