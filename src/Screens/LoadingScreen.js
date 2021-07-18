import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { ImageBackground } from "react-native";
const LoadingScreen = () => {
  const { trylocalSignin } = useContext(AuthContext);
  useEffect(() => {
    trylocalSignin();
  }, []);
  return null;
};
export default LoadingScreen;
