import React, { useContext, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
} from "react-native";
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from "../../context/AuthContext";

const ListNewsScreen = ({ navigation }) => {
  const { state, getnews } = useContext(AuthContext);
  console.log(state.length);

  return (
    <View style={styles.back}>
      <NavigationEvents onWillFocus={getnews} />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("NewsDetail", { _id: item._id })
              }
            >
              <View style={styles.news}>
                <Text style={styles.textStyle}>{item.name} </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  back: {
    backgroundColor: "#F1F1F1",
  },
  news: {
    marginHorizontal: 10,
    marginBottom: 3,
    shadowColor: "black",
    paddingVertical: 13,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    fontSize: 20,
    alignSelf: "center",
  },
});
ListNewsScreen.navigationOptions = {
  title: "List of all news",
  headerTintColor: "#ffffff",
  headerStyle: {
    backgroundColor: "#2F95D6",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
};
export default ListNewsScreen;
/*
import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ListNewsScreen({ navigation }) {
  const [news, setinternship] = useState([
    {
      id: "1",
      name: "Lockdown",
      description:
        "Due to lock institue will be closed till 2 month untill further information will be provided ",
      date: "13/5/2021",
    },
    { id: "3", name: "Corona", description: "kaisay", date: "13/5/2021" },
    { id: "7", name: "Final Exam", description: "kaisay", date: "13/5/2021" },
    {
      id: "9",
      name: "Mid Exam result",
      description: "kaisay",
      date: "13/5/2021",
    },
  ]);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(news) => news.id}
      data={news}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("NewsDetail", item)}
          >
            <View style={styles.container}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
ListNewsScreen.navigationOptions = {
  headerTintColor: "#ffffff",
  headerStyle: {
    backgroundColor: "#2F95D6",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 15,
    justifyContent: "center",
    backgroundColor: "#559BBB",
  },
  textStyle: {
    fontSize: 30,
    alignSelf: "center",
  },
});*/
