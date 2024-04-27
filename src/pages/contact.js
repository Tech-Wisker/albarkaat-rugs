import { Box, Button, Flex, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp, IoMdCall } from 'react-icons/io';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { t } from 'i18next';

function Contact() {
  const toast = useToast()
  function copyNumber(e) {
   
    const copyText = "+919936016930"
  
  console.log(e.target.textContent)

    navigator.clipboard.writeText(copyText);
    const id = 'test-toast'
    if (!toast.isActive(id)) {
      toast({
        id,
        title: '+91 99360169304 copied!',
      })
    }
    // alert("Copied the text: " + copyText);
  }
  const mail = ()=>{
    window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=mytraders.rugs@gmail.com&cc&bcc&su&body')
  }
  return (<>
    <Box minH={'67vh'} px={{lg : "10" , md : "5" , sm: "1" , base : "1"}} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}  maxW='1200px' margin='auto' mt={{lg: 100 , md : 150 , sm: 150 , base : 150}}>
     <Flex
    flexDirection={{lg:'row', md:'column' , sm:'column' , base : 'column'}}
    justifyContent="space-evenly"
    transition="2s"
    w={{lg : "80vw" , md : '90vw' , sm : '90vw' , base : '90vw'}} mb="50px" p={6} >
      <Box
      w={{lg:"400px",md:'100%' , sm:'100%',base:'100%'}} p={15}>
        <Text fontSize={35} textAlign={{lg : "left" , md : 'center' , sm : 'left' , base : 'left'}}>{t("contactus.title")}</Text>
        <Box mt={50} w="100%">
         <Flex alignItems='center' justifyContent={{lg:'left' , md:'center' , sm:undefined , base: undefined}} gap={{lg:"35px" , md : '35px' , sm:'10px',base:'10px'}} my={8}>
          <Box><MdEmail className='hover_icon' onClick={mail} size={30}/></Box>
          <Box><Text className={"underline"} fontSize={{lg:undefined,md:undefined ,sm:'smaller',base:'smaller'}} onClick={mail} >mytraders.rugs@gmail.com</Text></Box>
          </Flex>
         <Flex justifyContent={{lg:'left' , md:'center' , sm:undefined , base: undefined}} gap={{lg:"35px" , md : '35px' , sm:'10px',base:'10px'}} my={8}><Box><IoMdCall className='hover_icon' size={30} onClick={copyNumber} /></Box><Box>
         <Text className={"underline"} onClick={copyNumber} >+91 9936016930</Text>
        </Box> </Flex>
         <Flex mt={50} justifyContent="space-evenly">
            <IoLogoWhatsapp className='hover_icon' onClick={()=>{
              window.open('https://wa.link/6b8v5c')  
            }}  size={50}/>
            <AiFillInstagram className='hover_icon' onClick={()=>{
              window.open('https://www.instagram.com/rugs_mart_/')  
            }}  size={50}/>
            <AiFillMail className='hover_icon' onClick={mail}  size={50}/>
            
            </Flex>
        </Box>
      </Box>
        <ContactForm/>
    </Flex>
    </Box>
  </>
  )
}

export default Contact