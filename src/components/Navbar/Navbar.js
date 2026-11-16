import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Text } from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import MenuData from './Menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

const Navbar = () => {
    const [style, setStyle] = useState(false);
    const [home, setHome] = useState(true);
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showDrop, setShowDrop] = useState(false);
    const debounceRef = useRef(null);
    const wrapperRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (!style && Math.floor(window.scrollY) > 180) setStyle(true);
            else if (style && Math.floor(window.scrollY) < 180) setStyle(false);
        };
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [style]);

    useEffect(() => {
        if (router.asPath === "/" || router.asPath === "/aboutus") setHome(true);
        else setHome(false);
    }, [router.asPath, style]);

    // close dropdown on outside click
    useEffect(() => {
        const handler = (e) => { if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setShowDrop(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleChange = (e) => {
        const val = e.target.value;
        setSearch(val);
        clearTimeout(debounceRef.current);
        if (!val.trim()) { setSuggestions([]); setShowDrop(false); return; }
        debounceRef.current = setTimeout(async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_MYT_BASE_URL}/products?search=${val.trim()}`);
                setSuggestions(res.data.slice(0, 6));
                setShowDrop(true);
            } catch { setSuggestions([]); }
        }, 400);
    };

    const navigate = (term) => {
        setShowDrop(false);
        setSuggestions([]);
        router.push(`/products?search=${term}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) navigate(search.trim());
    };

    const showSearch = style || !home;
    const isLight = !home || style;

    return (
        <Box zIndex={200} px={"20px"} bg={home ? (style ? "white" : "transparent") : "white"} pos={"fixed"} left={0} right={0} w={"100%"} h={"80px"}>
            <Flex color={home ? (style ? "black" : "white") : "black"} justifyContent={"space-between"} alignItems={"center"} w={"100%"} h={"100%"} gap={4}>
                <Link href={"/"}><Image height={10} width={100} src="/images/logo.png" /></Link>
                {showSearch && (
                    <Box ref={wrapperRef} as="form" onSubmit={handleSubmit} flex={1} maxW="380px" position="relative" display={{ base: "none", md: "block" }}>
                        <InputGroup size="sm">
                            <Input
                                value={search}
                                onChange={handleChange}
                                onFocus={() => suggestions.length > 0 && setShowDrop(true)}
                                placeholder="Search rugs..."
                                borderRadius="full"
                                borderColor={isLight ? "gray.300" : "whiteAlpha.500"}
                                bg={isLight ? "gray.100" : "whiteAlpha.200"}
                                color={isLight ? "black" : "white"}
                                _placeholder={{ color: isLight ? "gray.400" : "whiteAlpha.600" }}
                                _focus={{ borderColor: isLight ? "gray.500" : "white", bg: isLight ? "white" : "whiteAlpha.300" }}
                            />
                            <InputRightElement>
                                <IconButton aria-label="search" icon={<FiSearch />} size="xs" variant="ghost" color={isLight ? "gray.500" : "white"} type="submit" />
                            </InputRightElement>
                        </InputGroup>
                        {showDrop && suggestions.length > 0 && (
                            <Box
                                pos="absolute" top="110%" left={0} right={0}
                                bg="white" borderRadius="12px" boxShadow="rgba(0,0,0,0.15) 0px 4px 20px"
                                overflow="hidden" zIndex={300}
                            >
                                {suggestions.map((s) => (
                                    <Flex
                                        key={s._id}
                                        align="center" gap={3} px={3} py={2}
                                        cursor="pointer" _hover={{ bg: "gray.50" }}
                                        onMouseDown={() => navigate(s.title)}
                                    >
                                        <Box
                                            w="36px" h="36px" borderRadius="6px" flexShrink={0}
                                            backgroundImage={s.image?.[0]?.includes('drive.google.com') ? `url(https://drive.google.com/thumbnail?id=${s.image[0].split('id=').pop()}&sz=w100)` : `url(${s.image?.[0]})`}
                                            backgroundSize="cover" backgroundPosition="center"
                                        />
                                        <Box overflow="hidden">
                                            <Text fontSize="sm" fontWeight="medium" color="black" noOfLines={1}>{s.title}</Text>
                                            <Text fontSize="xs" color="gray.400">{s.type}</Text>
                                        </Box>
                                    </Flex>
                                ))}
                                <Box
                                    px={3} py={2} borderTop="1px solid" borderColor="gray.100"
                                    cursor="pointer" _hover={{ bg: "gray.50" }}
                                    onMouseDown={() => navigate(search.trim())}
                                >
                                    <Text fontSize="sm" color="gray.500">See all results for <b>{search}</b></Text>
                                </Box>
                            </Box>
                        )}
                    </Box>
                )}
                <MenuData style={style} home={home} />
            </Flex>
        </Box>
    );
}

export default Navbar;
