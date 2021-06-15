import React from 'react'
import { CheckIcon, MinusIcon } from '@chakra-ui/icons';
import { HStack} from "@chakra-ui/react";
import { Box, InputRightElement } from "@chakra-ui/react";

const BottomOrPart = () => {
    return (
        <Box textAlign='center' marginTop="5px">
             <HStack direction={["column", "row"]} spacing="202px">
           <MinusIcon color='#000000' width='240 px'/>
            <text fontSize='18px'>or</text>
           <MinusIcon color='#000000' width='240 px'/>
            </HStack>
        </Box>
       
    )
}

export default BottomOrPart
