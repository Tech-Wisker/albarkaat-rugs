import CategoryById from '@/components/Categories/CategoryById';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Type = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log("queryId",id , router)
    if(id){
       return (
         <>
           <Head>
             <title>{id} Rugs | Albarkaat Overseas</title>
             <meta name="description" content={`Explore ${id} rugs and carpets at Albarkaat Overseas. Handcrafted with premium materials for lasting quality.`} />
             <meta property="og:title" content={`${id} Rugs | Albarkaat Overseas`} />
           </Head>
           <CategoryById id={id}/>
         </>
       )
    }else {
       return <Box w={"100%"} h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
           <Text>No Types Found</Text>
        </Box>
    }
}

export default Type;
