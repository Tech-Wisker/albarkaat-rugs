import CollectionById from '@/components/Collections/CollectionById';
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Collection = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log("queryId",id , router)
    if(id){
       return <CollectionById id={id}/>
    }
    return <Box w={"100%"} h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text>No Collections Found</Text>
     </Box>
    
}

export default Collection;
