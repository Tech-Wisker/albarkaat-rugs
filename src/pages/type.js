import CategoryById from '@/components/Categories/CategoryById';
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Type = () => {
    const router = useRouter()
    const { id } = router.query;
    console.log("queryId",id , router)
    if(id){
       return <CategoryById id={id}/>
    }else {
       return <Box w={"100%"} h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
           <Text>No Types Found</Text>
        </Box>
    }
}

export default Type;
