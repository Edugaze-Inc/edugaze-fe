import { HStack, Link} from "@chakra-ui/react";
import { Box, InputRightElement } from "@chakra-ui/react";
import React from 'react'

const BottomTextPart = () => {
    return (
        <Box textAlign='center' marginTop="5px" marginLeft="100px">
             <HStack direction={["column", "row"]}>
            <text>Don't have an account?</text>
           <Link color="blue">Sign up?</Link>
            </HStack>
        </Box>
    )
}

export default BottomTextPart
