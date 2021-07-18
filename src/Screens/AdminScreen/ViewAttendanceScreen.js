/*import React, { useContext, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as AuthContext } from "../../context/AuthContext";

const ViewAttendanceScreen = ({ navigation }) => {
  const { state, getattendance } = useContext(AuthContext);
  console.log(state.length);
  
  return (
    <>
      <NavigationEvents onWillFocus={getattendance} />

      <Text style={{ fontSize: 48 }}>
        Lilst of all internship{state.length}
      </Text>
      <ListView
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem chevron title={item.Name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default ViewAttendanceScreen;*/

import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ViewAttendanceScreen({ navigation }) {
  const [Attendance, setinternship] = useState([
    {
      id: "0",
      name: "Talha Hafeez",
      date: "25/5/2021",
      timein: "05:37:30",
      timeout: "05:37:55",
      mask: "yes",
    },
    {
      id: "1",
      name: "Hamza Saleem",
      date: "25/5/2021",
      timein: "05:36:34",
      timeout: "05:37:50",
      mask: "yes",
    },
  ]);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(Attendance) => Attendance.id}
      data={Attendance}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailAttedance", item)}
          >
            <View style={styles.Attendance}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
ViewAttendanceScreen.navigationOptions = {
  headerTintColor: "#ffffff",
  headerStyle: {
    backgroundColor: "#2F95D6",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
const styles = StyleSheet.create({
  back: {
    backgroundColor: "#F1F1F1",
  },
  Attendance: {
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
