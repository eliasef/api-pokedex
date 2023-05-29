import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { useFonts } from "@expo-google-fonts/poppins";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar/>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
