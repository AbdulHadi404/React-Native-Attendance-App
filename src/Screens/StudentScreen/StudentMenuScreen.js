import React, { useContext } from "react";
import { ImageBackground, View, Text, Button, StyleSheet } from "react-native";
import { navigate } from "../../navigationref";
import { Context as AuthContext } from "../../context/AuthContext";
import CustomButton from "../../components/CustomButton";
const StudentMenuScreen = (navigation) => {
  const { state, signout, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weclome</Text>

      <CustomButton
        buttontext="view internship"
        onPress={() => navigate("ListInternship")}
      />
      <CustomButton
        buttontext="View News"
        onPress={() => navigate("ListNews")}
      />
      <Button
        style={styles.but}
        title="Signout"
        onPress={() => navigate("Starting")}
      ></Button>
    </View>
  );
};
StudentMenuScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 48,
  },
  but: {
    marginTop: 5,
    marginHorizontal: 10,
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
});
export default StudentMenuScreen;
