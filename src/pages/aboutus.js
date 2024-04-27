import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  Heading,
  Flex,
  Icon,
  Link,
  Center,
} from "@chakra-ui/react";
import ServiceCard from "../components/Aboutus/ServiceCard";
import ContactForm from "../components/Contact/ContactForm";
import { t } from "i18next";

const AboutUsPage = () => {
  const service = [
    {
      img : "https://img.favpng.com/12/0/13/meeting-computer-icons-conference-centre-clip-art-png-favpng-qe3K1QY8kZwbJumUgiX5yrAG9.jpg",
      title : t("aboutus.service1")
    },
    {
      img : "https://www.pngmart.com/files/16/Hand-Shake-PNG-Transparent-Image.png",
      title : t("aboutus.service2")
    },
    {
      img : "https://img.freepik.com/premium-vector/growth-rise-icon-image-growth-clip-art_640834-109.jpg?w=2000",
      title : t("aboutus.service3")
    },
    {
      img : "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-best-price-line-icon-vector-png-image_6692934.png",
      title : t("aboutus.service4")
    },
  ]
  // const [aboutText , setAboutText] = useState("");
  // const textRef = useRef(null)
  // let position = 0;
  // const writeText = (position)=>{
  //   const text = "Welcome to our carpet emporium, where luxury meets comfort and style. Our passion for carpets is woven into every thread, and we take pride in offering you a curated collection of exquisite carpets that can transform your space. Whether you're seeking warmth, elegance, or a statement piece, our carpets are designed to elevate your home or office. Step into a world of quality craftsmanship, timeless designs, and unparalleled comfort – discover the perfect carpet for your unique taste and lifestyle at MYT Rugs."
  //     if(!textRef.current && position < text.length){
  //       textRef.current = setInterval(()=>{
  //         setAboutText((pre)=>pre+(text[position]||""));
  //          position++;
  //          if(position >= text.length){
  //             clearInterval(textRef.current)
  //           }
  //         },30)
  //     }
  // }
  // useEffect(()=>{
  //   writeText(position)
  // },[])
  return (
    <>
    <Box
      h={"100vh"}
      w={"100%"}
      backgroundImage={"/images/aboutus2.jpg"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={'center'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      >
      <Text textShadow={"4px 4px 2px rgba(0,0,0,0.36)"} width={{lg :"60%" , md : "70%" , sm : "85%" , base : "60%"}} textAlign={'center'} fontSize={{lg :"3em" , md : "2em" , sm : "1.5em" , base : "3em"}} color={'white'} fontWeight={"semibold"} letterSpacing={5}>
      {t("aboutus.banner.desc")}
      </Text>
   
    </Box>
    <Box
     w={"100%"}
     display={'flex'}
     justifyContent={'center'}
     alignItems={'center'}
    //  bgColor={"#e8edea"}
    >
      <Text py="70px" width={{lg :"60%" , md : "70%" , sm : "85%" , base : "60%"}} textAlign={'center'} fontSize={{lg :"1.2em" , md : "1em" , sm : "0.7em" , base : "1.2em"}} color={'black'} lineHeight={2} >
      {t("aboutus.desc")}
      </Text>
    </Box>
    <hr/>
    <Box>
    {
          service.map((e,i)=>{
            if(i%2!==0){
              return <ServiceCard key={e.id+""+i} {...e} dir="row" />
            }else{
              
              return <ServiceCard key={e.id+""+i} {...e} dir="row-reverse" />
            }
        })
        }
    </Box>
    <Box
     w={"100%"}
     display={'flex'}
     flexDirection={"column"}
     justifyContent={'center'}
     alignItems={'center'}
     bgColor={"white"}
     mt="50px"
     gap={"30px"}
    >
      <Heading textAlign={"ce"}>{t("contactus.title")}</Heading>
     <ContactForm/>
    </Box>
    </>
  );
};

export default AboutUsPage;
