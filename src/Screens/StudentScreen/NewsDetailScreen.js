import React, { useContext } from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { SocialIcon } from "react-native-elements";
import { Context as AuthContext } from "../../context/AuthContext";
//bahriauniversityofficial
const NewsDetailScreen = ({ navigation, route }) => {
  const { state } = useContext(AuthContext);
  const _id = navigation.getParam("_id");
  const name1 = state.find((n) => n._id === _id);
  return (
    <View>
      <View style={styles.containter1}>
        <Text style={styles.Text}>{name1.name}</Text>
      </View>
      <View style={styles.containter2}>
        <Text style={styles.Text}>{name1.description}</Text>
      </View>
      <View style={styles.icon}>
        <SocialIcon
          onPress={() =>
            Linking.openURL("https://www.facebook.com/BUKHICAMPUS")
          }
          type="facebook"
        />
        <SocialIcon
          type="instagram"
          onPress={() =>
            Linking.openURL("instagram://user?username=bukcofficial")
          }
        />
      </View>
    </View>
  );
};
NewsDetailScreen.navigationOptions = {
  headerTintColor: "#ffffff",
  headerStyle: {
    backgroundColor: "#2F95D6",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
const styles = StyleSheet.create({
  containter1: {
    marginHorizontal: 15,
    marginTop: 10,

    backgroundColor: "#ECF1FD",
  },
  containter2: {
    marginHorizontal: 15,
    marginTop: 5,

    paddingBottom: 400,
    backgroundColor: "#ECF1FD",
  },
  icon: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  Text: {
    fontSize: 20,
  },
});
export default NewsDetailScreen;
