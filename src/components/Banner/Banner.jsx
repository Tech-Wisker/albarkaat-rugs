import { Box, Image, Input, InputGroup, InputRightAddon, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Translate from '../Common/Translate';


const Banner = () => {
    const {t , i18n} = useTranslation(); 
    const [blur , setBlur] = useState(false);
    const router = useRouter()
    const [debData , setDebData] = useState([])
    const [inp , setInp] = useState("")
    const [loading , setLoading] = useState(false);
    const url = process.env.REACT_APP_MYT_BASE_URL
    let timeId ;
    async function getDebData(s){
        setLoading(true);
        if(s!==""){
          axios.get(`${url}/products?search=${s}&limit=5`).then(async(res)=>{
            const translatedDate = await Translate(res.data,i18n.language)
            setDebData(translatedDate)
            console.log(res.data)
            setLoading(false)
        }).catch((e)=>{
            console.log(e.message)
            setLoading(false)
        }) 
    }else{
        setDebData([])
        setLoading(false)
        }
      }

    function handleDebouncing(e){
        if(!timeId){
         clearTimeout(timeId)
         timeId = setTimeout(()=>{
            getDebData(e.target.value)
         },[1000])
        }
        setInp(e.target.value)
   }
   function searchData(x){
    router.push(`/products?search=${x}`)
  }
    return (
        <Box 
        w={"100%"}  
        h={"100vh"} 
        pos={"relative"}>
            <Box
             display={"flex"}
             justifyContent={"center"}
             pos={"absolute"}
             left={0}
             right={0}
             top={0}
             bottom={0}
             zIndex={10}
             >
                <Box
                 mt={"350px"}
                 mx={"50px"}
                 width= "60vw" 
                 maxWidth= "100%"
                 color={"white"}
                >
                <InputGroup
                 w={"100%"}
                 bg={"transparent"}
                 h={"50px"}
                //  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                >
             <Input 
             placeholder={t("search.placeholder")}
             _placeholder={{ color: 'white' }}
             focusBorderColor='white'
             onFocus={()=>{
                setBlur(true)
             }}
             onBlur={()=>{
                setBlur(false)
             }}
             onChange={(e)=>{handleDebouncing(e)}}
             onKeyUp={(e)=>{if(e.code==='Enter')searchData(inp)}}
             />
             <InputRightAddon
             onClick={()=>{searchData(inp)}}
             border={blur ? "2px solid white" : "1px solid white"}
              bg={"transparent"}>
             {loading ? <Spinner h={"16px"} w={"16px"}/> : <IoSearch/>}
             </InputRightAddon>
             </InputGroup>
             {(debData.length > 0 && blur) && <Box
              border={"2px solid"}
              borderRadius={"0px 0px 20px 20px"}
              style={{
                borderTopColor: "transparent",
              }}
              mt={"-13px"}
              py= {"10px"}
              overflowX={"hidden"}
              px={"3px"}
              w={"100%"}>
               {
                debData.map((e)=>{ 
                    return <Box w={"100%"} _hover={{color : "blue.300"}}><Text>{e.title}</Text><hr/></Box>
                })
               }
             </Box>}
             </Box>
            </Box>
            <Image zIndex={9} src={"/images/background/home.jpg"} transition="filter 0.5s ease" style={{ filter: (blur ? "blur(8px)" : "blur(0px)") }} width={"100%"} height={"100%"}/>
        </Box>
    );
}

export default Banner;
