import React, { useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import { NavigationEvents } from "react-navigation";
import {
  ImageBackground,
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { navigate } from "../../navigationref";

const UseTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={500}
    />
  );
};

const CreateNewsScreen = (navigation) => {
  const { state, setnews, clearErrorMessage } = useContext(AuthContext);
  const [description, setdescription] = React.useState();
  const [name, setname] = React.useState();
  return (
    <>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text style={styles.text}>Newsform</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setname}
          value={name}
          placeholder="Name of news"
          keyboardType="numeric"
        />

        <View
          style={{
            borderBottomColor: "#000000",
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 5,
            fontSize: 50,
          }}
        >
          <UseTextInput
            style={{
              fontSize: 20,
              textAlignVertical: "top",
              marginHorizontal: 5,
            }}
            multiline
            numberOfLines={9}
            placeholder="type decription"
            onChangeText={setdescription}
            value={description}
          />
        </View>

        <Spacer>
          {state.errorMessage ? (
            <Text style={styles.errorMessage}>something went wrong</Text>
          ) : null}
          <Button
            title="Create News"
            onPress={() => setnews({ name, description })}
          />
        </Spacer>
      </View>
    </>
  );
};
CreateNewsScreen.navigationOptions = {
  headerTintColor: "#ffffff",
  headerStyle: {
    backgroundColor: "#2F95D6",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
  },
  text: {
    marginTop: 30,
    fontSize: 48,
    alignSelf: "center",
  },
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 5,
  },
});
export default CreateNewsScreen;
