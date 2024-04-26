import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import LanguageSwitch from "@/components/Language/LanguageSwitch";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18/i18n";
import { useEffect } from "react";




function App({ Component, pageProps }) {
  const { i18n } = useTranslation();

  useEffect(()=>{
    const language = JSON.parse(localStorage.getItem("language") || "null");
    i18n.changeLanguage(language.code || "en")
  },[])
  return <>
   <I18nextProvider i18n={i18n}>
  <ChakraProvider>
    <Navbar/>
    <Box width={"100%"} overflow={"hidden"}>
  <Component {...pageProps} />
    </Box>
    <LanguageSwitch/>
  </ChakraProvider>
   </I18nextProvider>
  </>;
}
export default App;