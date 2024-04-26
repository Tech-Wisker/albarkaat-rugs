import { Box, Button,Flex,Menu, MenuButton, MenuItem, MenuList, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function MenuData ({style,home}){
    const breakpoint = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: "xl", "2xl": "2xl" });
    
//    menu item in list
    const menuItems = [
        {
            title : "Types",
            path : "/types"
        },
        {
            title : "Products",
            path : "/products"
        },
        {
            title : "Contact",
            path : "/contact"
        },
        {
            title : "Login",
            path : "/login"
        }
    ]

    // Determine the device type based on the breakpoint
    if (breakpoint === "base" || breakpoint === "sm" || breakpoint === "md") {
      return <>
      <Menu>
  <MenuButton color={home ? (style ? "black" : "white") : "black"} variant={"ghost"} as={Button}>
  <GiHamburgerMenu />
  </MenuButton>
  <MenuList color={"black"}>
    {
        menuItems.map((e)=><MenuItem><Link href={e.path}>{e.title}</Link></MenuItem>)
    }
  </MenuList>
</Menu>
      </>
    }else {
      return <Flex gap={"15px"} h={"100%"} alignItems={"center"}>
       {menuItems.map((e)=><Link href={e.path}>{e.title}</Link>)}
      </Flex>
    }

}

export default MenuData;
