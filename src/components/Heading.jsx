import { Text } from '@chakra-ui/react';
import React from 'react';

const Heading = ({children}) => {
    return (
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"xx-large"}>
            {children}
        </Text>
    );
}

export default Heading;
