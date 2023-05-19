import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/poppins";

import { Welcome } from "./src/pages/Welcome";
import { Home } from "./src/pages/Home";

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
    <ThemeProvider theme={theme}>
    <Welcome /> 
    {/* <Home /> */}
    </ThemeProvider>
  );
}