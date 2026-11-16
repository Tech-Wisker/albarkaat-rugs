import { Box, Button, Center, Divider, Flex, Heading, Image, SimpleGrid, Skeleton, SkeletonText, Tag, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Head from 'next/head';
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
    <>
    {product && (
      <Head>
        <title>{product.title} | Albarkaat Overseas</title>
        <meta name="description" content={`${product.title} — ${product.description?.[0] || 'Premium handmade rug available at Albarkaat Overseas.'}`} />
        <meta property="og:title" content={`${product.title} | Albarkaat Overseas`} />
        <meta property="og:description" content={product.description?.[0] || 'Premium handmade rug at Albarkaat Overseas.'} />
        <meta property="og:image" content={product.image?.[0]} />
      </Head>
    )}
    <Box minH={'67vh'} px={{lg:'10',md:'5',sm:'1',base:'1'}} maxW='1200px' margin='auto' mt={{lg:100,md:150,sm:150,base:150}}>
      <Flex flexDir={{lg:'row',md:'row',sm:'column',base:'column'}} justifyContent={'space-between'} mt={'50px'} gap={{lg:'10',md:'10',sm:'20',base:'20'}}>
        {/* Image column */}
        <Flex width={{lg:'50%',md:'50%',sm:'100%',base:'100%'}} flexDir='column' gap='10' alignItems='center'>
          <Skeleton isLoaded={!loading} w='100%' h='340px' borderRadius='12px'>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center'>
              <Zoom>
                <img
                  alt={product?.title}
                  src={product ? (product['image'][img] || '/images/not_found.avif') : '/images/loading.jpg'}
                  width='500'
                />
              </Zoom>
            </Box>
          </Skeleton>
          <SimpleGrid columns={{lg:'5',md:'5',sm:'4',base:'4'}} gap={5}>
            {loading
              ? Array(4).fill('').map((_,i) => <Skeleton key={i} w={{lg:'70px',md:'65px',sm:'50px',base:'45px'}} h={{lg:'70px',md:'65px',sm:'50px',base:'45px'}} borderRadius='6px'/>)
              : product?.image.map((e,i) => (
                <Box key={e+i} backgroundSize='cover' backgroundRepeat='no-repeat' backgroundPosition='center'
                  width={{lg:'70px',md:'65px',sm:'50px',base:'45px'}} height={{lg:'70px',md:'65px',sm:'50px',base:'45px'}}
                  backgroundImage={e} onClick={() => setImg(i)} cursor='pointer'
                />
              ))
            }
          </SimpleGrid>
        </Flex>
        {/* Details column */}
        <Flex flexDir='column' alignItems={{lg:'flex-start',md:'flex-start',sm:'center',base:'center'}}
          textAlign={{lg:'left',md:'left',sm:'center',base:'center'}} width={{lg:'45%',md:'45%',sm:'100%',base:'100%'}}>
          {loading ? (
            <>
              <Skeleton h='16px' w='80px' mb={3}/>
              <Skeleton h='48px' w='70%' mb={4}/>
              <Divider mt='10' mb='5'/>
              <SkeletonText noOfLines={4} spacing='3' w='100%'/>
              <Divider my='4' mt='10'/>
              <Skeleton h='16px' w='60px' mb={3}/>
              <Flex gap={2}><Skeleton h='24px' w='60px' borderRadius='full'/><Skeleton h='24px' w='60px' borderRadius='full'/></Flex>
            </>
          ) : (
            <>
              <Text color='cyan.400' textTransform='capitalize'>{product?.type}</Text>
              <Text fontWeight='semibold' fontSize={{lg:'6xl',md:'4xl',sm:'2xl',base:'2xl'}}>{product?.title}</Text>
              <Divider mt='10' mb='5'/>
              {product?.description.map((e,i) => <Text key={e+i} fontSize='xl'>{e}</Text>)}
              <Divider my='4' mt='10'/>
              <Box>
                <Text fontSize='xl' mb='2'>Sizes</Text>
                <Wrap>{product?.sizes.map((e,i) => <WrapItem key={e+i}><Tag colorScheme='cyan'>{e}</Tag></WrapItem>)}</Wrap>
              </Box>
              <Flex gap='15' mt='10'><Inquiry {...product}/><Share {...product}/></Flex>
              <Text fontSize='xl' textTransform='uppercase' color='grey' letterSpacing={5} mt='50px'>{`[  ${product?.productcode}  ]`}</Text>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
    </>
  )
}

export default Display