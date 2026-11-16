import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  Heading,
  Grid,
  GridItem,
  Flex,
  Icon,
  Link,
  Center,
} from "@chakra-ui/react";
import Head from "next/head";
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
    <Head>
      <title>About Us | Albarkaat Overseas</title>
      <meta name="description" content="Learn about Albarkaat Overseas — a trusted exporter of premium handmade rugs and carpets with a commitment to quality, fair pricing, and global delivery." />
      <meta property="og:title" content="About Us | Albarkaat Overseas" />
      <meta property="og:description" content="Discover the story behind Albarkaat Overseas and our passion for handcrafted rugs." />
    </Head>
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
    {/* Factory Section */}
    <Box w="100%" py="80px" px={{lg:"50px", md:"20px", sm:"10px", base:"10px"}} bgColor="gray.50">
      <Text textAlign="center" fontSize={{base:"2xl", md:"3xl"}} fontWeight="semibold" letterSpacing={3} mb="50px">
        From Our Factory
      </Text>

      <Grid
        h="1400px"
        w="100%"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={{lg:"50px", md:"20px", sm:"10px", base:"10px"}}
      >
        {/* video 1 — colSpan 2 */}
        <GridItem rowSpan={4} colSpan={2}>
          <Box w="100%" h="100%" borderRadius="20px" overflow="hidden" boxShadow="rgba(99,99,99,0.2) 0px 2px 8px 0px">
            <video
              ref={el => { if(el) el.playbackRate = 0.5 }}
              src="/factory/factory-video-1.mp4"
              autoPlay loop muted playsInline
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
            />
          </Box>
        </GridItem>

        {/* image 1 — colSpan 3 */}
        <GridItem rowSpan={2} colSpan={3}>
          <Box w="100%" h="100%" borderRadius="20px" overflow="hidden" boxShadow="rgba(99,99,99,0.2) 0px 2px 8px 0px">
            <img src="/factory/factory-image-1.png" alt="Factory 1" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
          </Box>
        </GridItem>

        {/* image 2 — colSpan 3 */}
        <GridItem rowSpan={2} colSpan={3}>
          <Box w="100%" h="100%" borderRadius="20px" overflow="hidden" boxShadow="rgba(99,99,99,0.2) 0px 2px 8px 0px">
            <img src="/factory/factory-image-2.jpeg" alt="Factory 2" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
          </Box>
        </GridItem>

        {/* video 2 — colSpan 2 */}
        <GridItem rowSpan={4} colSpan={2}>
          <Box w="100%" h="100%" borderRadius="20px" overflow="hidden" boxShadow="rgba(99,99,99,0.2) 0px 2px 8px 0px">
            <video
              ref={el => { if(el) el.playbackRate = 0.5 }}
              src="/factory/factory-video-2.mp4"
              autoPlay loop muted playsInline
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
            />
          </Box>
        </GridItem>

        {/* video 3 — colSpan 3 */}
        <GridItem rowSpan={4} colSpan={3}>
          <Box w="100%" h="100%" borderRadius="20px" overflow="hidden" boxShadow="rgba(99,99,99,0.2) 0px 2px 8px 0px">
            <video
              ref={el => { if(el) el.playbackRate = 0.5 }}
              src="/factory/factory-video-3.mp4"
              autoPlay loop muted playsInline
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
            />
          </Box>
        </GridItem>

        {/* PDF — full width */}
        <GridItem rowSpan={2} colSpan={5}>
          <Box
            w="100%" h="100%"
            borderRadius="20px"
            boxShadow="rgba(99,99,99,0.2) 0px 2px 8px 0px"
            bgGradient="linear(to-r, gray.800, gray.600)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={{base:"20px", md:"50px"}}
            gap={4}
          >
            <Flex alignItems="center" gap={4}>
              <Text fontSize="40px">📄</Text>
              <Box>
                <Text color="white" fontWeight="semibold" fontSize={{base:"md", md:"xl"}}>Company Profile</Text>
                <Text color="gray.300" fontSize="sm">Albarkaat Overseas — Full product catalogue & company overview</Text>
              </Box>
            </Flex>
            <Box
              as="a"
              href="/factory/company-profile.pdf"
              download
              bg="white"
              color="gray.800"
              px={6} py={3}
              borderRadius="10px"
              fontWeight="semibold"
              fontSize="sm"
              whiteSpace="nowrap"
              _hover={{ bg: "gray.100" }}
            >
              Download PDF
            </Box>
          </Box>
        </GridItem>
      </Grid>
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
