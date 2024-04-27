import { Box, Button, Input, useDisclosure } from '@chakra-ui/react';
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

const initLanguageContent = [
  {
    "id": 1,
    "code": "af",
    "name": "Afrikaans",
    "_name": "Afrikaans"
  },
  {
    "id": 2,
    "code": "sq",
    "name": "Shqip",
    "_name": "Albanian" 
  },
  {
    "id": 3,
    "code": "am",
    "name": "አማርኛ",
    "_name": "Amharic"
  },
  {
    "id": 4,
    "code": "ar",
    "name": "العربية",
    "_name": "Arabic"
  },
  {
    "id": 5,
    "code": "hy",
    "name": "Հայերեն",
    "_name": "Armenian"
  },
  {
    "id": 6,
    "code": "as",
    "name": "অসমীয়া",
    "_name": "Assamese"
  },
  {
    "id": 7,
    "code": "ay",
    "name": "Aymar",
    "_name": "Aymara"
  },
  {
    "id": 8,
    "code": "az",
    "name": "Azərbaycan",
    "_name": "Azerbaijani"
  },
  {
    "id": 9,
    "code": "bm",
    "name": "Bamanakan",
    "_name": "Bambara"
  },
  {
    "id": 10,
    "code": "eu",
    "name": "Euskara",
    "_name": "Basque"
  },
  {
    "id": 11,
    "code": "be",
    "name": "Беларуская",
    "_name": "Belarusian"
  },
  {
    "id": 12,
    "code": "bn",
    "name": "বাংলা",
    "_name": "Bengali"
  },
  {
    "id": 13,
    "code": "bho",
    "name": "भोजपुरी",
    "_name": "Bhojpuri"
  },
  {
    "id": 14,
    "code": "bs",
    "name": "Bosanski",
    "_name": "Bosnian"
  },
  {
    "id": 15,
    "code": "bg",
    "name": "български",
    "_name": "Bulgarian"
  },
  {
    "id": 16,
    "code": "ca",
    "name": "Català",
    "_name": "Catalan"
  },
  {
    "id": 17,
    "code": "ceb",
    "name": "Sinugboanong Binisaya",
    "_name": "Cebuano"
  },
  {
    "id": 18,
    "code": "zh-CN",
    "name": "简体中文",
    "_name": "Chinese (Simplified)"
  },
  {
    "id": 19,
    "code": "zh-TW",
    "name": "繁體中文",
    "_name": "Chinese (Traditional)"
  },
  {
    "id": 20,
    "code": "co",
    "name": "Corsu",
    "_name": "Corsican"
  },
  {
    "id": 21,
    "code": "hr",
    "name": "Hrvatski",
    "_name": "Croatian"
  },
  {
    "id": 22,
    "code": "cs",
    "name": "Čeština",
    "_name": "Czech"
  },
  {
    "id": 23,
    "code": "da",
    "name": "Dansk",
    "_name": "Danish"
  },
  {
    "id": 24,
    "code": "dv",
    "name": "ދިވެހި",
    "_name": "Dhivehi"
  },
  {
    "id": 25,
    "code": "doi",
    "name": "डोगरी",
    "_name": "Dogri"
  },
  {
    "id": 26,
    "code": "nl",
    "name": "Nederlands",
    "_name": "Dutch"
  },
  {
    "id": 27,
    "code": "en",
    "name": "English",
    "_name": "English"
  },
  {
    "id": 28,
    "code": "eo",
    "name": "Esperanto",
    "_name": "Esperanto"
  },
  {
    "id": 29,
    "code": "et",
    "name": "Eesti",
    "_name": "Estonian"
  },
  {
    "id": 30,
    "code": "ee",
    "name": "Eʋegbe",
    "_name": "Ewe"
  },
  {
    "id": 31,
    "code": "fil",
    "name": "Filipino",
    "_name": "Filipino (Tagalog)"
  },
  {
    "id": 32,
    "code": "fi",
    "name": "Suomi",
    "_name": "Finnish"
  },
  {
    "id": 33,
    "code": "fr",
    "name": "Français",
    "_name": "French"
  },
  {
    "id": 34,
    "code": "fy",
    "name": "Frysk",
    "_name": "Frisian"
  },
  {
    "id": 35,
    "code": "gl",
    "name": "Galego",
    "_name": "Galician"
  },
  {
    "id": 36,
    "code": "ka",
    "name": "ქართული",
    "_name": "Georgian"
  },
  {
    "id": 37,
    "code": "de",
    "name": "Deutsch",
    "_name": "German"
  },
  {
    "id": 38,
    "code": "el",
    "name": "Ελληνικά",
    "_name": "Greek"
  },
  {
    "id": 39,
    "code": "gn",
    "name": "Avañe'ẽ",
    "_name": "Guarani"
  },
  {
    "id": 40,
    "code": "gu",
    "name": "ગુજરાતી",
    "_name": "Gujarati"
  },
  {
    "id": 41,
    "code": "ht",
    "name": "Kreyòl Ayisyen",
    "_name": "Haitian Creole"
  },
  {
    "id": 42,
    "code": "ha",
    "name": "Hausa",
    "_name": "Hausa"
  },
  {
    "id": 43,
    "code": "haw",
    "name": "Hawai'i",
    "_name": "Hawaiian"
  },
  {
    "id": 44,
    "code": "he",
    "name": "עברית",
    "_name": "Hebrew"
  },
  {
    "id": 45,
    "code": "hi",
    "name": "हिन्दी",
    "_name": "Hindi"
  },
  {
    "id": 46,
    "code": "hmn",
    "name": "Hmoob",
    "_name": "Hmong"
  },
  {
    "id": 47,
    "code": "hu",
    "name": "Magyar",
    "_name": "Hungarian"
  },
  {
    "id": 48,
    "code": "is",
    "name": "Íslenska",
    "_name": "Icelandic"
  },
  {
    "id": 49,
    "code": "ig",
    "name": "Igbo",
    "_name": "Igbo"
  },
  {
    "id": 50,
    "code": "ilo",
    "name": "Ilokano",
    "_name": "Ilocano"
  },
  {
    "id": 51,
    "code": "id",
    "name": "Indonesia",
    "_name": "Indonesian"
  },
  {
    "id": 52,
    "code": "ga",
    "name": "Gaeilge",
    "_name": "Irish"
  },
  {
    "id": 53,
    "code": "it",
    "name": "Italiano",
    "_name": "Italian"
  },
  {
    "id": 54,
    "code": "ja",
    "name": "日本語",
    "_name": "Japanese"
  },
  {
    "id": 55,
    "code": "jw",
    "name": "ꦧꦱꦗꦮ",
    "_name": "Javanese"
  },
  {
    "id": 56,
    "code": "kn",
    "name": "ಕನ್ನಡ",
    "_name": "Kannada"
  },
  {
    "id": 57,
    "code": "kk",
    "name": "Қазақша",
    "_name": "Kazakh"
  },
  {
    "id": 58,
    "code": "km",
    "name": "ភាសាខ្មែរ",
    "_name": "Khmer"
  },
  {
    "id": 59,
    "code": "rw",
    "name": "Kinyarwanda",
    "_name": "Kinyarwanda"
  },
  {
    "id": 60,
    "code": "gom",
    "name": "गोंयची कोंकणी / Gõychi Konknni",
    "_name": "Konkani"
  },
  {
    "id": 61,
    "code": "ko",
    "name": "한국어",
    "_name": "Korean"
  },
  {
    "id": 62,
    "code": "kri",
    "name": "Krio",
    "_name": "Krio"
  },
  {
    "id": 63,
    "code": "ku",
    "name": "Kurdî",
    "_name": "Kurdish"
  },
  {
    "id": 64,
    "code": "ckb",
    "name": "کوردیی ناوەندی",
    "_name": "Kurdish (Sorani)"
  },
  {
    "id": 65,
    "code": "ky",
    "name": "Кыргызча",
    "_name": "Kyrgyz"
  },
  {
    "id": 66,
    "code": "lo",
    "name": "ລາວ",
    "_name": "Lao"
  },
  {
    "id": 67,
    "code": "la",
    "name": "Latina",
    "_name": "Latin"
  },
  {
    "id": 68,
    "code": "lv",
    "name": "Latviešu",
    "_name": "Latvian"
  },
  {
    "id": 69,
    "code": "ln",
    "name": "Lingála",
    "_name": "Lingala"
  },
  {
    "id": 70,
    "code": "lt",
    "name": "Lietuvių",
    "_name": "Lithuanian"
  },
  {
    "id": 71,
    "code": "lg",
    "name": "Luganda",
    "_name": "Luganda"
  },
  {
    "id": 72,
    "code": "lb",
    "name": "Lëtzebuergesch",
    "_name": "Luxembourgish"
  },
  {
    "id": 73,
    "code": "mk",
    "name": "Македонски",
    "_name": "Macedonian"
  },
  {
    "id": 74,
    "code": "mai",
    "name": "मैथिली, মৈথিলী",
    "_name": "Maithili"
  },
  {
    "id": 75,
    "code": "mg",
    "name": "Malagasy",
    "_name": "Malagasy"
  },
  {
    "id": 76,
    "code": "ms",
    "name": "Bahasa Melayu",
    "_name": "Malay"
  },
  {
    "id": 77,
    "code": "ml",
    "name": "മലയാളം",
    "_name": "Malayalam"
  },
  {
    "id": 78,
    "code": "mt",
    "name": "Malti",
    "_name": "Maltese"
  },
  {
    "id": 79,
    "code": "mi",
    "name": "Māori",
    "_name": "Maori"
  },
  {
    "id": 80,
    "code": "mr",
    "name": "मराठी",
    "_name": "Marathi"
  },
  {
    "id": 81,
    "code": "mni",
    "name": "ꯃꯤꯇꯩ ꯂꯣꯟ",
    "_name": "Meiteilon (Manipuri)"
  },
  {
    "id": 82,
    "code": "lus",
    "name": "Mizo ţawng",
    "_name": "Mizo"
  },
  {
    "id": 83,
    "code": "mn",
    "name": "Монгол",
    "_name": "Mongolian"
  },
  {
    "id": 84,
    "code": "my",
    "name": "ဗမာစာ",
    "_name": "Myanmar (Burmese)"
  },
  {
    "id": 85,
    "code": "ne",
    "name": "नेपाली",
    "_name": "Nepali"
  },
  {
    "id": 86,
    "code": "no",
    "name": "Norsk",
    "_name": "Norwegian"
  },
  {
    "id": 87,
    "code": "ny",
    "name": "Chichewa",
    "_name": "Nyanja (Chichewa)"
  },
  {
    "id": 88,
    "code": "or",
    "name": "ଓଡ଼ିଆ",
    "_name": "Odia (Oriya)"
  },
  {
    "id": 89,
    "code": "om",
    "name": "Afaan Oromoo",
    "_name": "Oromo"
  },
  {
    "id": 90,
    "code": "ps",
    "name": "پښتو",
    "_name": "Pashto"
  },
  {
    "id": 91,
    "code": "fa",
    "name": "فارسی",
    "_name": "Persian"
  },
  {
    "id": 92,
    "code": "pl",
    "name": "Polski",
    "_name": "Polish"
  },
  {
    "id": 93,
    "code": "pt",
    "name": "Português",
    "_name": "Portuguese (Portugal, Brazil)"
  },
  {
    "id": 94,
    "code": "pa",
    "name": "ਪੰਜਾਬੀ",
    "_name": "Punjabi"
  },
  {
    "id": 95,
    "code": "qu",
    "name": "Runasimi",
    "_name": "Quechua"
  },
  {
    "id": 96,
    "code": "ro",
    "name": "Română",
    "_name": "Romanian"
  },
  {
    "id": 97,
    "code": "ru",
    "name": "Русский",
    "_name": "Russian"
  },
  {
    "id": 98,
    "code": "sm",
    "name": "Gagana Samoa",
    "_name": "Samoan"
  },
  {
    "id": 99,
    "code": "sa",
    "name": "संस्कृतम्",
    "_name": "Sanskrit"
  },
  {
    "id": 100,
    "code": "gd",
    "name": "Gàidhlig",
    "_name": "Scots Gaelic"
  },
  {
    "id": 101,
    "code": "nso",
    "name": "Sesotho sa Leboa",
    "_name": "Sepedi"
  },
  {
    "id": 102,
    "code": "sr",
    "name": "Српски",
    "_name": "Serbian"
  },
  {
    "id": 103,
    "code": "st",
    "name": "Sesotho",
    "_name": "Sesotho"
  },
  {
    "id": 104,
    "code": "sn",
    "name": "Shona",
    "_name": "Shona"
  },
  {
    "id": 105,
    "code": "sd",
    "name": "سنڌي",
    "_name": "Sindhi"
  },
  {
    "id": 106,
    "code": "si",
    "name": "සිංහල",
    "_name": "Sinhala (Sinhalese)"
  },
  {
    "id": 107,
    "code": "sk",
    "name": "Slovenčina",
    "_name": "Slovak"
  },
  {
    "id": 108,
    "code": "sl",
    "name": "Slovenščina",
    "_name": "Slovenian"
  },
  {
    "id": 109,
    "code": "so",
    "name": "Soomaaliga",
    "_name": "Somali"
  },
  {
    "id": 110,
    "code": "es",
    "name": "Español",
    "_name": "Spanish"
  },
  {
    "id": 111,
    "code": "su",
    "name": "Basa Sunda",
    "_name": "Sundanese"
  },
  {
    "id": 112,
    "code": "sw",
    "name": "Kiswahili",
    "_name": "Swahili"
  },
  {
    "id": 113,
    "code": "sv",
    "name": "Svenska",
    "_name": "Swedish"
  },
  {
    "id": 114,
    "code": "tl",
    "name": "Tagalog",
    "_name": "Tagalog (Filipino)"
  },
  {
    "id": 115,
    "code": "tg",
    "name": "тоҷикӣ",
    "_name": "Tajik"
  },
  {
    "id": 116,
    "code": "ta",
    "name": "தமிழ்",
    "_name": "Tamil"
  },
  {
    "id": 117,
    "code": "tt",
    "name": "Татар",
    "_name": "Tatar"
  },
  {
    "id": 118,
    "code": "te",
    "name": "తెలుగు",
    "_name": "Telugu"
  },
  {
    "id": 119,
    "code": "th",
    "name": "ภาษาไทย",
    "_name": "Thai"
  },
  {
    "id": 120,
    "code": "ti",
    "name": "ትግርኛ",
    "_name": "Tigrinya"
  },
  {
    "id": 121,
    "code": "ts",
    "name": "Xitsonga",
    "_name": "Tsonga"
  },
  {
    "id": 122,
    "code": "tr",
    "name": "Türkçe",
    "_name": "Turkish"
  },
  {
    "id": 123,
    "code": "tk",
    "name": "Туркменче",
    "_name": "Turkmen"
  },
  {
    "id": 124,
    "code": "ak",
    "name": "Twi",
    "_name": "Twi (Akan)"
  },
  {
    "id": 125,
    "code": "uk",
    "name": "Українська",
    "_name": "Ukrainian"
  },
  {
    "id": 126,
    "code": "ur",
    "name": "اردو",
    "_name": "Urdu"
  },
  {
    "id": 127,
    "code": "ug",
    "name": "Uyƣurqə",
    "_name": "Uyghur"
  },
  {
    "id": 128,
    "code": "uz",
    "name": "Ўзбек",
    "_name": "Uzbek"
  },
  {
    "id": 129,
    "code": "vi",
    "name": "Tiếng Việt",
    "_name": "Vietnamese"
  },
  {
    "id": 130,
    "code": "cy",
    "name": "Cymraeg",
    "_name": "Welsh"
  },
  {
    "id": 131,
    "code": "xh",
    "name": "isiXhosa",
    "_name": "Xhosa"
  },
  {
    "id": 132,
    "code": "yi",
    "name": "ייִדיש",
    "_name": "Yiddish"
  },
  {
    "id": 133,
    "code": "yo",
    "name": "Yorùbá",
    "_name": "Yoruba"
  },
  {
    "id": 134,
    "code": "zu",
    "name": "isiZulu",
    "_name": "Zulu"
  }
]

const LanguageSwitch = () => {
    const [languageContent , setLanguageContent] = useState(initLanguageContent);
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
      function searchLanguage(x){
        const e = x.toLowerCase()
        if(e=="" || !e){
          setLanguageContent([...initLanguageContent]);
        }else{
          const data = initLanguageContent.filter((item)=>{
            console.log("ite",e,item)
            if(item.name.toLowerCase().includes(e)){
              return true;
            }
            if(item._name.toLowerCase().includes(e)){
              return true;
            }
          })
          setLanguageContent([...data]);
          console.log("searchData",data)
        }
      }

    return (<>
    
        <Button colorScheme="cyan" variant={"outline"} bg="white" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" w={"70px"} h={"70px"} borderRadius={"50%"} pos={"fixed"} zIndex={10} right={4} bottom={4} ref={btnRef} textTransform={"uppercase"} onClick={onOpen}>
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
          <DrawerHeader>
            Select Your Language
            <Input 
             onChange={(e)=>{searchLanguage(e.target.value)}}
             placeholder='search your language'/>
            </DrawerHeader>

          <DrawerBody>
           {languageContent.map((e)=>{
            if(e.id === selectedLanguage.id){
                return <Box bg= "gray.300" key={e.id} w={"100%"} h={"50px"} px={"10px"} py="10px"><span style={{fontWeight : "bold"}}>{e.name}</span> ({e._name})</Box>
            }
            else{
                return <Box onClick={() => handleItemClick(e)} _hover={{bg : "gray.300"}} key={e.id} w={"100%"} h={"50px"} px={"10px"} py="10px"><span style={{fontWeight : "bold"}}>{e.name}</span> ({e._name})</Box>
            }
           })}
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='cyan' variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </>
    );
}

export default LanguageSwitch;
