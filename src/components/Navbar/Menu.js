import { Box, Button, Flex, Input, InputGroup, InputRightElement, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { t } from 'i18next';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { FiSearch } from 'react-icons/fi';
import LanguageSwitch from '../Language/LanguageSwitch';
import { useRouter } from 'next/router';
import axios from 'axios';

function MenuData ({style,home}){
    const breakpoint = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: "xl", "2xl": "2xl" });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const debounceRef = useRef(null);
    const router = useRouter();

    const handleChange = (e) => {
        const val = e.target.value;
        setSearch(val);
        clearTimeout(debounceRef.current);
        if (!val.trim()) { setSuggestions([]); return; }
        debounceRef.current = setTimeout(async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_MYT_BASE_URL}/products?search=${val.trim()}`);
                setSuggestions(res.data.slice(0, 5));
            } catch { setSuggestions([]); }
        }, 400);
    };

    const navigate = (term) => {
        setSuggestions([]);
        setSearch(term);
        router.push(`/products?search=${term}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) navigate(search.trim());
    };
//    menu item in list
    const menuItems = [
        {
            title : t("types.title"),
            path : "/types"
        },
        {
            title : t("collections.title"),
            path : "/collections"
        },
        {
            title : t("products.title"),
            path : "/products"
        },
        {
            title : t("contact.title"),
            path : "/contact"
        },
        {
            title : t("aboutus.title"),
            path : "/aboutus"
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
    <Box as="form" onSubmit={handleSubmit} px={3} py={2}>
      <InputGroup size="sm">
        <Input
          value={search}
          onChange={handleChange}
          placeholder="Search rugs..."
          borderRadius="full"
        />
        <InputRightElement>
          <IconButton aria-label="search" icon={<FiSearch/>} size="xs" variant="ghost" type="submit"/>
        </InputRightElement>
      </InputGroup>
      {suggestions.length > 0 && (
        <Box mt={1} bg="white" borderRadius="8px" boxShadow="sm" overflow="hidden">
          {suggestions.map((s) => (
            <Flex
              key={s._id} align="center" gap={2} px={2} py={2}
              cursor="pointer" _hover={{ bg: "gray.50" }}
              onMouseDown={() => navigate(s.title)}
            >
              <Box
                w="28px" h="28px" borderRadius="4px" flexShrink={0}
                backgroundImage={s.image?.[0]?.includes('drive.google.com') ? `url(https://drive.google.com/thumbnail?id=${s.image[0].split('id=').pop()}&sz=w100)` : `url(${s.image?.[0]})`}
                backgroundSize="cover" backgroundPosition="center"
              />
              <Box overflow="hidden">
                <Text fontSize="xs" fontWeight="medium" color="black" noOfLines={1}>{s.title}</Text>
                <Text fontSize="xs" color="gray.400">{s.type}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
    {
        menuItems.map((e,i)=><MenuItem key={"ssdx"+i}><Link href={e.path}>{e.title}</Link></MenuItem>)
    }
    <MenuItem onClick={onOpen}><MdLanguage style={{marginRight:"8px"}}/> Language</MenuItem>
  </MenuList>
</Menu>
      <LanguageSwitch isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      </>
    }else {
      return <Flex gap={"15px"} h={"100%"} alignItems={"center"}>
       {menuItems.map((e,i)=><Link key={"dx"+i} href={e.path}>{e.title}</Link>)}
       <Box as="button" onClick={onOpen} display="flex" alignItems="center" gap="4px">
         <MdLanguage size={15}/> Language
       </Box>
       <LanguageSwitch isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      </Flex>
    }

}

export default MenuData;
