"use client"
import ProductCard from '@/components/Cards/ProductCard';
import Translate from '@/components/Common/Translate';
import { Box, Grid, Skeleton, SkeletonText } from '@chakra-ui/react';

const SkeletonBox = Skeleton;
import Breadcrumbs from '@/components/Heading';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

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
    }, [search])
    if(loading){
        return (
            <>
            <Box mt="100px" />
            <Box px={{ base: "20px", md: "50px" }} py={3}>
                <Skeleton h="16px" w="200px" borderRadius="full" />
            </Box>
            <Grid mt="50px" p="50px" w="100%" templateColumns={{lg:'repeat(4,1fr)',md:'repeat(3,1fr)',sm:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={6}>
                {Array(8).fill('').map((_,i) => (
                    <Box key={i}>
                        <SkeletonBox h="220px" borderRadius="12px" mb={3}/>
                        <Skeleton h="16px" w="80%" mb={2}/>
                        <Skeleton h="12px" w="50%"/>
                    </Box>
                ))}
            </Grid>
            </>
        )
    }
    return (<>
    <Head>
      <title>{search ? `Search: ${search}` : 'All Products'} | Albarkaat Overseas</title>
      <meta name="description" content={search ? `Search results for "${search}" — handmade rugs and carpets at Albarkaat Overseas.` : 'Browse all handmade rugs and carpets available at Albarkaat Overseas. Quality craftsmanship, worldwide delivery.'} />
      <meta property="og:title" content={search ? `Search: ${search} | Albarkaat Overseas` : 'All Products | Albarkaat Overseas'} />
    </Head>
    <Box mt={"100px"} />
    <Breadcrumbs crumbs={search
      ? [{ label: 'Products', href: '/products' }, { label: `"${search}"` }]
      : [{ label: 'Products' }]
    } />
     {
        (productData.length === 0) ? <Box h={"70vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>{t("product.notfound")}</Box> :
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
