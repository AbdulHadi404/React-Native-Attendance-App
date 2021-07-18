import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function RfidAttendanceScreen({ navigation }) {
  const [Attendance, setAttendance] = useState([
    {
      id: "1",
      name: "Talha Hafeez",
      date: "25/5/2021",
      timein: "9:46:59",
      timeout: "14:55:20",
    },
    {
      id: "2",
      name: "Hamza Saleem",
      date: "25/5/2021",
      timein: "9:46:59",
      timeout: "14:55:20",
    },
    {
      id: "3",
      name: "Abdul Hadi",
      date: "25/5/2021",
      timein: "9:46:59",
      timeout: "14:55:20",
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
            onPress={() => navigation.navigate("RfidDetailAttendance", item)}
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
RfidAttendanceScreen.navigationOptions = {
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
