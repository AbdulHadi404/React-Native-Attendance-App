import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from "../../context/AuthContext";

const ListInternshipScreen = ({ navigation }) => {
  const { state, getinternship } = useContext(AuthContext);
  console.log(state.length);

  return (
    <View style={styles.back}>
      <NavigationEvents onWillFocus={getinternship} />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("InternshipDetail", { _id: item._id })
              }
            >
              <View style={styles.internship}>
                <Text style={styles.textStyle}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ListInternshipScreen;

ListInternshipScreen.navigationOptions = {
  title: "List of internship",
  headerStyle: {
    backgroundColor: "#2F95D6",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
};
const styles = StyleSheet.create({
  back: {
    backgroundColor: "#F1F1F1",
  },
  internship: {
    marginHorizontal: 10,
    marginBottom: 4,
    shadowColor: "black",
    paddingVertical: 12,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    color: "#02104F",
    fontSize: 20,
    alignSelf: "center",
  },
});
