import { Box, Button, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const languageContent = [
    { id: 1, code: "en", name: "English" },
    { id: 2, code: "es", name: "Español" },
    { id: 3, code: "fr", name: "Français" },
    { id: 4, code: "de", name: "Deutsch" },
    { id: 5, code: "it", name: "Italiano" },
    { id: 6, code: "pt", name: "Português" },
    { id: 7, code: "ru", name: "Pусский" },
    { id: 8, code: "zh-CN", name: "简体中文" },
    { id: 9, code: "zh-TW", name: "繁體中文" },
    { id: 10, code: "ja", name: "日本語" },
    { id: 11, code: "ko", name: "한국어" },
    { id: 12, code: "ar", name: "العربية" },
    { id: 13, code: "hi", name: "हिन्दी" },
    { id: 14, code: "bn", name: "বাংলা" },
    { id: 15, code: "ur", name: "اردو" }
  ];
const LanguageSwitch = () => {
  const { i18n } = useTranslation();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const router = useRouter();
      const [selectedLanguage, setSelectedLanguage] = useState(languageContent[0]);
      useEffect(()=>{
        const language = JSON.parse(localStorage.getItem("language") || "null");
        console.log("lanff",language);
        if(!language || language === "null"){
          setSelectedLanguage(languageContent[0]);
        }else{
          setSelectedLanguage(language);
        }
      },[])

      const handleItemClick = async (item) => {
        setSelectedLanguage(item);
        const langRoute = item?.code;
        localStorage.setItem("language",JSON.stringify(item));
        // await router.push({
        //   pathname: router.pathname,
        //   query: { ...router.query },
        // },undefined,{locale: langRoute});
        i18n.changeLanguage(item.code);
        onClose();
        router.reload()
      };

    return (<>
    
        <Button boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" w={"70px"} h={"70px"} borderRadius={"50%"} pos={"fixed"} color={"black"} bg={"white"} zIndex={10} right={4} bottom={4} ref={btnRef} textTransform={"uppercase"} colorScheme='teal' onClick={onOpen}>
        {selectedLanguage.code || "lang"}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select Your Language</DrawerHeader>

          <DrawerBody>
           {languageContent.map((e)=>{
            if(e.id === selectedLanguage.id){
                return <Box bg= "gray.300" key={e.id} w={"100%"} h={"50px"} px={"10px"} py="10px">{e.name}</Box>
            }
            else{
                return <Box onClick={() => handleItemClick(e)} _hover={{bg : "gray.300"}} key={e.id} w={"100%"} h={"50px"} px={"10px"} py="10px">{e.name}</Box>
            }
           })}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={()=>{
        router.push("/prode")
    }}>
        dldcldc
    </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </>
    );
}

export default LanguageSwitch;
