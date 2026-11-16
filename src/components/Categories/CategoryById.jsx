"use client"
import Translate from '@/components/Common/Translate';
import { Box, Grid, GridItem, Skeleton, Text } from '@chakra-ui/react';
import Breadcrumbs from '../Heading';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Cards/ProductCard';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const CategoryById = ({id}) => {
    const router = useRouter();
    const [data , setData] = useState({})
    const [productData , setProductData] = useState([])
    const {i18n} = useTranslation();
    const [loading , setLoading] = useState(false)
    const fetchProductData = async (x) => {
      setLoading(true);
      try {
        const url = process.env.REACT_APP_MYT_BASE_URL+"/products?type="+x;
        const res = await axios.get(url);
        const translatedData = await Translate(res.data, i18n.language);
        console.log("translated ",translatedData , i18n.language)
        const modifiedData = [];
        for(let item in translatedData){
          modifiedData.push({ ...translatedData[item],image : res.data[item].image })
        }
        setProductData([...modifiedData]);
        console.log("products",modifiedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
   
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
              const url = process.env.REACT_APP_MYT_BASE_URL+"/types/"+id;
              const res = await axios.get(url);
              const translatedData = await Translate(res.data, i18n.language);
              console.log("translated ",translatedData , router.locale)
              if(res && res.data.img.includes("drive.google.com")){
                const temp = res.data.img.split("id=");
                await setData({ ...translatedData,img : `https://drive.google.com/thumbnail?id=${temp[temp.length-1]}&sz=w1000` })
              }else{
                  setData(translatedData);
              }
              await fetchProductData(res.data.title);
            } catch (error) {
              console.error('Error fetching data:', error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    }, [])
    console.log("IDDATA",data);
    if(loading){
        return (
            <>
                <Skeleton w='100%' h='90vh'/>
                <Box px={{base:'20px',md:'50px'}} py={3}><Skeleton h='16px' w='250px' borderRadius='full'/></Box>
                <Grid mt='50px' p='50px' w='100%' templateColumns={{lg:'repeat(4,1fr)',md:'repeat(3,1fr)',sm:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={6}>
                    {Array(8).fill('').map((_,i) => (
                        <Box key={i}><Skeleton h='220px' borderRadius='12px' mb={3}/><Skeleton h='16px' w='80%' mb={2}/><Skeleton h='12px' w='50%'/></Box>
                    ))}
                </Grid>
            </>
        )
    }
   
    return (<>
    <Box
    w={"100%"}
    height={"90vh"}
    bgImage={data.img}
    backgroundRepeat={"no-repeat"}
    backgroundSize={"cover"}
    backgroundPosition={"bottom"}
    position={"relative"}
    >
    <Box 
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    pos={"absolute"}
    top={0}
    bottom={0}
    left={0}
    right={0}
    color={"white"}
    >
        <Box px="30px" textAlign="center">
    <Text fontSize="3xl" fontWeight="bold" color="white">{data.title}</Text>
    <Text color="white">{data.description}</Text>
        </Box>
    </Box>
    </Box>
    <Breadcrumbs crumbs={[{ label: t('categories.heading'), href: '/types' }, { label: data.title }]} />
     <Grid 
     mt={"50px"}
     p={"50px"}
     w={"100%"}
     minH={"100vh"}
     templateColumns={{lg :'repeat(4, 1fr)',md :'repeat(3, 1fr)', sm : 'repeat(2, 1fr)', base :'repeat(1, 1fr)'}} gap={6}
     >
      { productData &&
        productData.map((e)=>{
          console.log("eee",e,e.title)
          return <ProductCard {...{...e,img : e.image[0],description: e.description.join("\n")}} />
        })
      }
     </Grid>
    </>)
}

export default CategoryById;
