import React from 'react';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { Link }from 'next/link';


const NotFoundPage = () => {
  return (
    <Box
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Page Not Found | Albarkaat Overseas</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Box textAlign="center" mt="70px">
        <Image src={'/images/not_found.avif'} alt="Creative 404" maxW="400px" mx="auto" mb="4" />

        <Heading as="h1" fontSize="6xl" color="cyan.400">
          Oops!
        </Heading>
        <Text fontSize="3xl" mt="4" color="gray.600">
         {`We couldn't find the page you were looking for.`}
        </Text>
        <Button
          as={Link}
          to="/"
          colorScheme="cyan"
          mt="8"
          color={"white"}
          size="lg"
          fontWeight="bold"
          _hover={{ bg: 'cyan.600' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Back to Home
        </Button>
      </Box>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        bgGradient="linear(to-b, cyan.400, cyan.100)"
        color="white"
        py="2"
        textAlign="center"
        fontWeight="bold"
      >
       {` What you're looking for have been misplaced in Long Term Memory.`}
      </Box>
    </Box>
  );
};

export default NotFoundPage;
