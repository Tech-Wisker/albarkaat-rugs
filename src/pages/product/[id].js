import { Box, Button, Center, Divider, Flex, Heading, Image, SimpleGrid, Skeleton, Tag, Text, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbFaceIdError } from 'react-icons/tb';

import ReactImageZoom from "react-image-zoom";
import Inquiry from '../../components/Inquiry/Inquiry';
import Share from '../../components/Share/Share';
import { useRouter } from 'next/router';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


function Display() {
  const router = useRouter();
  const { id } = router.query; 
  console.log("dsod",id)
    const url = process.env.REACT_APP_MYT_BASE_URL
    const [product,setProduct] = useState();
    const [loading , setLoading] = useState(true)
    const [img , setImg] = useState(0)
    const [error , setError] = useState(false)
 

    
   const getData = async () => {
    setLoading(true)
    try{

  

      axios.get(url+"/products/"+id).then((res)=>{
        const urls = []
        for(const im of res.data.image){
          if(im.includes("drive.google.com")){
            const temp = im.split("id=");
            urls.push(`https://drive.google.com/thumbnail?id=${temp[temp.length-1]}&sz=w1000`);
          }else {
            urls.push(im);
          }
        }
         console.log("image",res.data.image , urls)
          setProduct({...res.data,image : urls})
          setLoading(false)
      }).catch((e)=>{
        console.log("err",e.message)
      })  
    

  }
  catch(err){
    console.log("error",err.message)
  }
   }
    useEffect(()=>{
      if(router.query.id){
        getData()
      }
     },[router.query,router])
    const props = {
        // width: 500,
        height: 340,
        zoomPosition: "original",
        zoomWidth: 200,
        img: product ? (product['image'][img] || "/not_found.avif" ) : "/loading.jpg"
      };
  if(error){
    return <Box minH={'67vh'} px={{lg : "10" , md : "5" , sm: "1" , base : "1"}} maxW='1200px' margin='auto' mt={{lg: 100 , md : 150 , sm: 150 , base : 150}}>
    <TbFaceIdError size="100%"/>
    </Box>
  }

  return (
    <Skeleton isLoaded={!loading} >
    <Box minH={'67vh'} px={{lg : "10" , md : "5" , sm: "1" , base : "1"}} maxW='1200px' margin='auto' mt={{lg: 100 , md : 150 , sm: 150 , base : 150}}>
     

    <Text
        fontWeight={'semibold'}
        fontSize={{lg: "6xl", md :"4xl" , sm : "3xl" , base : "2xl"}}
        display={{lg: "none", md :"none" , sm : 'block' , base : 'block'}}
        textAlign='center'
        >
        {product && product.title}
        </Text>


    <Flex 
    flexDir={{lg : "row" , md : "row" , sm: "column" , base: 'column'}}
    justifyContent={'space-between'} mt={'50px'}
    gap={{lg: "10", md :"10" , sm : "20" , base : "20"}}
     >


        <Flex 
        width={{lg : '50%' , md : "50%" , sm:"100%" , base:"100%"}}
        flexDir={"column"}
        gap="10"
        alignItems={'center'}
        >

    <Box
     width={'100%'}
     display='flex'
     alignItems={'center'}
     justifyContent='center'
     >
         <Zoom>
    <img
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src={product ? (product['image'][img] || "/images/not_found.avif" ) : "/images/loading.jpg"}
      width="500"
    />
  </Zoom>
         {/* <ReactImageZoom {...props} /> */}
    </Box>
    <SimpleGrid columns={{lg: "5", md :"5" , sm : "4" , base : "4"}}  gap={5}>
      {product ? product['image'].map((e,i)=>{
        return (
           <Box
           key={e+i}
           backgroundSize="cover"
           backgroundRepeat="no-repeat"
           backgroundPosition={'center'}
           width={{lg: "70px", md :"65px" , sm : "50px" , base : "45px"}}
           height={{lg: "70px", md :"65px" , sm : "50px" , base : "45px"}}
           backgroundImage={e}
           onClick={()=>{
            setImg(i)
           }}
           >

           </Box>
        )
      }): ""}
    </SimpleGrid>
        </Flex>


        <Flex 
        flexDir={'column'}
        alignItems={{lg : 'flex-start' , md : 'flex-start' , sm:"center" , base:"center"}}
        textAlign={{lg : 'left' , md : "left" , sm:"center" , base:"center"}}
        width={{lg : '45%' , md : "45%" , sm:"100%" , base:"100%"}}
        >
        <Text
         color={'cyan.400'}
         textTransform={'capitalize'}
        >
            {product&&product.type}
        </Text>
        <Text
        fontWeight={'semibold'}
        fontSize={{lg: "6xl", md :"4xl" , sm : "2xl" , base : "2xl"}}
        >
        {product && product.title}
        </Text>

            <Divider mt="10" mb="5" />

        
            {product && product.description.map((e,i)=>{
                return <Text key={e+i} fontSize={'xl'}>{e}</Text>
            })}

            <Divider  my="4" mt="10"/>

            <Box>
                <Text fontSize={'xl'} mb={'2'}>Sizes</Text>
                <Wrap>
                {product && product.sizes.map((e,i)=>{
               return <WrapItem key={e+i}><Tag colorScheme={'cyan'}> {e} </Tag></WrapItem>
            })}
                </Wrap> 
            </Box>
        
            <Flex gap={'15'} mt={"10"}>
                <Inquiry {...product}/>
                <Share {...product}/>
            </Flex>
  

             <Text fontSize='xl' textTransform={'uppercase'} color={'grey'} letterSpacing={5} mt={'50px'}>
             {`[  ${product && product.productcode}  ]`}
             </Text>
        </Flex>


    </Flex>
    </Box>
    </Skeleton>
  )
}

export default Display