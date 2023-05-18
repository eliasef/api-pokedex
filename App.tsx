import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";

import { Welcome } from "./src/pages/Welcome";
import { Home } from "./src/pages/Home";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
     {/* <Welcome />  */}
    <Home />
    </ThemeProvider>
  );
}