import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CollectionCard = ({_id,img,description,title}) => {
    const [hover, setHover] = useState(false);
    const [image , setImage] = useState(img);
    const router = useRouter();

    useEffect(()=>{
        if(img.includes("drive.google.com")){
            const temp = img.split("id=");
            setImage(`https://drive.google.com/thumbnail?id=${temp[temp.length-1]}&sz=w1000`)
           }
    },[]);

    return (
        <Box
            onMouseOver={() => {
                setHover(true)
            }}
            onMouseLeave={() => {
                setHover(false)
            }}
            zIndex={1} 
            position={"relative"} 
            objectFit={"cover"} 
            backgroundSize={"cover"} 
            backgroundImage={image}  
            objectPosition={"center bottom"}
            w={"100%"}
            height={"100%"}
            overflow={"hidden"}
            borderRadius={"20px"}
            boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            >

            {hover && <Box zIndex={2} transition="filter 1s ease" pos={"absolute"} top={0} bottom={0} left={0} right={0} bg={"rgba(0, 0, 0, 0.58)"} >
            </Box>}

            {hover && <Box color={"white"} textAlign="center" zIndex={3} display={"flex"} flexDir={"column"} justifyContent={"center"} gap={10} py={"30px"} px={"15px"} transition="filter 0.5s ease" pos={"absolute"} top={0} bottom={0} left={0} right={0} >
                <Text noOfLines={{lg : 5 , md : 5 , sm : 3 , base : 3}} textTransform={"capitalize"}>{description}</Text>
                <Button
                onClick={()=>{
                    router.push(`/collection?id=${_id}`)
                }}
                >{title}</Button>
            </Box>}

            {!hover &&
                <Box zIndex={2} color={"white"} transition="filter 1s ease" pos={"absolute"} top={0} bottom={0} left={0} right={0} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Text>{title}</Text>
                </Box>
            }

        </Box>
    );
}

export default CollectionCard;
