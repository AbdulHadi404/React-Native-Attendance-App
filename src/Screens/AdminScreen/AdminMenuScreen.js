import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Sei from "../../api/Sei";
import { navigate } from "../../navigationref";

import CustomButton from "../../components/CustomButton";

const AdminMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Admin Menu</Text>

      <CustomButton
        buttontext="Add internship"
        onPress={() => navigate("CreateInternship")}
      />
      <CustomButton
        buttontext="Add News"
        onPress={() => navigate("CreateNews")}
      />
      <CustomButton
        buttontext="check Attendance"
        onPress={() => navigate("ViewAttendance")}
      />
      <CustomButton
        buttontext="Rfid Attendance"
        onPress={() => navigate("RfidAttendance")}
      />
      <CustomButton
        buttontext="Create Student Account"
        onPress={() => navigate("Signup")}
      />

      <CustomButton buttontext="Signout" onPress={() => navigate("Starting")} />
    </View>
  );
};
AdminMenuScreen.navigationOptions = { headerShown: false };
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
});
export default AdminMenuScreen;
