import React from "react";
import { useFonts } from "expo-font";

import 'react-native-reanimated'
import 'react-native-gesture-handler'

import { Routes } from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    "Red Hat Text_regular": require("./assets/fonts/Red_Hat_Text_regular.ttf"),
    "Red Hat Text_medium": require("./assets/fonts/Red_Hat_Text_medium.ttf"),
    "Red Hat Text_semibold": require("./assets/fonts/Red_Hat_Text_semibold.ttf"),
    "Red Hat Text_bold": require("./assets/fonts/Red_Hat_Text_bold.ttf"),
    "Red Hat Display_regular": require("./assets/fonts/Red_Hat_Display_regular.ttf"),
    "Red Hat Display_semibold": require("./assets/fonts/Red_Hat_Display_semibold.ttf"),
    "Red Hat Display_regular_italic": require("./assets/fonts/Red_Hat_Display_regular_italic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
export default App;
