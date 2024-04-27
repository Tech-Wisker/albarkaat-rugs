import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { t } from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
function Footer() {
  const {t} = useTranslation()
  return (
    <Box maxW='1300px' py="50px" margin='auto' >

    <Flex w="100%"
    py={{lg:"0px" , md:"0px" , sm:"0px" , base: "25px"}}
    boxShadow="rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"
    px="50px"
    alignItems={"center"}
    justifyContent={{lg:"space-between" , md:"space-between" , sm:"space-between" , base: 'center'}}>
        <Box>
         <Text fontSize="30px">{t("contactus.title")}</Text>
        <Flex justifyContent="space-evenly">
        <a target="_blank" rel="noreferrer"  href='https://www.instagram.com/rugs_mart_/'><AiFillInstagram className='hover_icon' size="40px"/></a>
           <a target="_blank" rel='noreferrer' href='mailto:mytraders.rugs@gmail.com?subject=Info%20About'><AiFillMail className='hover_icon' size="40px"/></a>
           <a target="_blank" rel='noreferrer' href='https://wa.link/6b8v5c'><IoLogoWhatsapp className='hover_icon' size="40px"/></a>
        </Flex>
        </Box>
        <Flex 
        width='300px'
        height='300px'
        // borderRadius="100%"
        justifyContent='center'
        alignItems='center'
        // border = '1px solid black'
        flexDir="column"
        display={{lg:'flex' , md:"flex" , sm:'flex' , base: 'none'}}
        visibility={{lg:'inherit',md:'inherit',sm:'inherit',base:'hidden'}}
        p={{lg:'10px' , md:"10px" , sm:'10px' , base: '0'}}
         >
            <Image src="/images/logo.png" alt="MY Traders" />
            <Text fontSize={"x-large"}>AL-BARKAAT RUGS</Text>
            <Text fontSize="9px">Unveil the Essence of Opulence in Every Fiber</Text>
           
        </Flex>
    </Flex>
    <Box padding="0.2px" bg="black" width="100%"/>
    <Center>© Al-Barkaat Rugs</Center>
    <Center> {t("developerSign")}<span> </span><a target='blank' style={{color : "blue"}} href='https://www.techwisker.com'>Tech Wisker</a> </Center>
            </Box>
  )
}

export default Footer