import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import homeStyle from "../../styles/Home.module.css";

function ServiceCard
({img,title,bg,dir}) {
  const [ref , inView] = useInView(false)
  const [ view , setView] = useState(false)
  useEffect(() => {
   console.log(inView)
   if(inView){
     setView(true)
   }
  }, [inView])
  
  return (
    <Box  ref={ref} width="100%" p="10px" pt="50px" pb="50px" bg={bg}>

    <Flex  margin="auto" flexDir={{lg:(dir ? dir : "row") , md : (dir ? dir : "row") , sm : "column" , base : "column"}} alignItems={{lg : "Center" , md : "center" , sm : "unset" , base : "unset" }} justifyContent="space-between" gap="50px" maxWidth="1000px">
         <Image filter={"invert(100%)"} bg={!(dir==="row") ? "white" : "beige"} blendMode={"darken"} borderRadius={"50px"} padding={"50px"} alt={title} boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" className={view?(dir==="row" ? `${homeStyle.animate} ${homeStyle.fadeInLeft}` : `${homeStyle.animate} ${homeStyle.fadeInRight}`):""} maxH={{lg:"300px", md :"300px" , sm: "unset" , base: "unset"}} src={img}/>
         <Flex className={view?`${homeStyle.animate} ${homeStyle.fadeInUp}`:""} flexDir="column" gap="20px" textAlign="left">
            <Text fontSize='1.2em' >{title}</Text>
         </Flex>
    </Flex>

    </Box>
  )
}

export default ServiceCard
