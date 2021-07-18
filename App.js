import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { setNavigator } from "./src/navigationref";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import StartingScreen from "./src/Screens/Start/StartingScreen";
import StudentSigninScreen from "./src/Screens/Start/StudentSigninScreen";
import SignupScreen from "./src/Screens/AdminScreen/SignupScreen";
import StudentMenuScreen from "./src/Screens/StudentScreen/StudentMenuScreen";
import LoadingScreen from "./src/Screens/LoadingScreen";

import AdminMenuScreen from "./src/Screens/AdminScreen/AdminMenuScreen";
import AdminSigninScreen from "./src/Screens/Start/AdminSigninScreen";

import CreateInternshipScreen from "./src/Screens/AdminScreen/CreateInternship";
import ListInternshipScreen from "./src/Screens/StudentScreen/ListIntershipScreen";
import CreateNewsScreen from "./src/Screens/AdminScreen/CreateNewsScreen";
import ListNewsScreen from "./src/Screens/StudentScreen/ListNewsScreen";
import NewsDetailScreen from "./src/Screens/StudentScreen/NewsDetailScreen";
import InternshipDetailScreen from "./src/Screens/StudentScreen/InternshipDetailScreen";
import DetailAttendanceScreen from "./src/Screens/AdminScreen/DetailAttendanceScreen";
import ViewAttendanceScreen from "./src/Screens/AdminScreen/ViewAttendanceScreen";
import RfidDetailAttendanceScreen from "./src/Screens/AdminScreen/RfidDetailAttendanceScreen";
import RfidAttendanceScreen from "./src/Screens/AdminScreen/RfidAttendanceScreen";
const switchNavigator = createSwitchNavigator({
  /* Start: createStackNavigator({
    ListNews: ListNewsScreen,
    NewsDetail: NewsDetailScreen,
  }) */
  loading: LoadingScreen,
  Start: createStackNavigator({
    Starting: StartingScreen,
    AdminSignin: AdminSigninScreen,
    StudentSignin: StudentSigninScreen,
  }),
  student: createStackNavigator({
    StudentMenu: StudentMenuScreen,

    ListNews: ListNewsScreen,
    InternshipDetail: InternshipDetailScreen,
    NewsDetail: NewsDetailScreen,
    ListInternship: ListInternshipScreen,
  }),

  admin: createStackNavigator({
    Adminmenu: AdminMenuScreen,
    Signup: SignupScreen,
    RfidDetailAttendance: RfidDetailAttendanceScreen,
    RfidAttendance: RfidAttendanceScreen,
    VciewAttendane: ViewAttendanceScreen,
    DetailAttendance: DetailAttendanceScreen,
    CreateInternship: CreateInternshipScreen,
    CreateNews: CreateNewsScreen,
    Signup: SignupScreen,
  }),
});
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
