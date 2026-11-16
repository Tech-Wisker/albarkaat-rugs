import CollectionById from '@/components/Collections/CollectionById';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Collection = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log("queryId",id , router)
    if(id){
       return (
         <>
           <Head>
             <title>{id} Collection | Albarkaat Overseas</title>
             <meta name="description" content={`Shop the ${id} rug collection at Albarkaat Overseas. Premium handmade carpets crafted with quality and elegance.`} />
             <meta property="og:title" content={`${id} Collection | Albarkaat Overseas`} />
           </Head>
           <CollectionById id={id}/>
         </>
       )
    }
    return <Box w={"100%"} h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text>No Collections Found</Text>
     </Box>
    
}

export default Collection;
