import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MenuData from './Menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const [style, setStyle] = useState(false);
    const [home , setHome] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            if (!style && Math.floor(window.scrollY) > 180) {
                setStyle(true);
            } else if (style && Math.floor(window.scrollY) < 180) {
                setStyle(false);
            }
        };

        document.addEventListener("scroll", handleScroll);
        console.log("sjncsjkcn")
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [style]);
    const par = router.asPath;
    useEffect(() => {
        if(par=== "/" || par=== "/aboutus"){
         setHome(true)
        }else{
         setHome(false)
        }
   },[par,style])
   

    return (
        <Box zIndex={200} px={"20px"} bg={home ? (style ? "white" : "transparent") : "white"} pos={"fixed"} left={0} right={0} w={"100%"} h={"80px"}>
            <Flex color={home ? (style ? "black" : "white") : "black"} justifyContent={"space-between"} alignItems={"center"} w={"100%"} h={"100%"}>
                <Link href={"/"}><Image height={10} width={100} src="/images/logo.png"/></Link>
                <MenuData style={style} home={home}/>
            </Flex>
        </Box>
    );
}

export default Navbar;
