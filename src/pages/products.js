"use client"
import ProductCard from '@/components/Cards/ProductCard';
import Translate from '@/components/Common/Translate';
import { Box, Center, Grid, GridItem, Heading, Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
    const router = useRouter();
    const [productData , setProductData] = useState([])
    const { i18n } = useTranslation()
    const [loading , setLoading] = useState(false)
    const {search} = router.query;
    const fetchProductData = async () => {
      setLoading(true);
      let url = process.env.REACT_APP_MYT_BASE_URL+"/products";
      if(search){
        url = url + `?search=${search}`
      }
      try {
        const res = await axios.get(url);
        const translatedData = await Translate(res.data, i18n.language);
        console.log("translated ",translatedData , router.locale)
        const modifiedData = [];
        for(let item in translatedData){
          const img = [];
          for(const im of res.data[item].image){
            if(im.includes("drive.google.com")){
              const temp = im.split("id=");
              img.push(`https://drive.google.com/thumbnail?id=${temp[temp.length-1]}&sz=w1000`)
            }else{
              img.push(im);
            }
          }
          modifiedData.push({ ...translatedData[item],image : [...img] })
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
          fetchProductData();
    }, [])
    if(loading){
        return <Skeleton>

        </Skeleton>
    }
    return (<>
     <Heading textAlign={"center"} mt={"100px"}>{search ? "Search Results for : " +search : "All Products"}</Heading>
     {
        (productData.length === 0) ? <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>No products found</Box> :
        <Grid 
     mt={"50px"}
     p={"50px"}
     w={"100%"}
     minH={"100vh"}
     templateColumns={{lg :'repeat(4, 1fr)',md :'repeat(3, 1fr)', sm : 'repeat(2, 1fr)', base :'repeat(1, 1fr)'}} gap={6}
     >
      { productData &&
        productData.map((e)=>{
          return <ProductCard {...{...e,img : e.image[0],description: e.description.join("\n")}} />
        })
      }
     </Grid>
     }
    </>
    );
}

export default Products;
