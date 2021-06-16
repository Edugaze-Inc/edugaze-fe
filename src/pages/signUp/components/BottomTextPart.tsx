import { HStack, Link} from "@chakra-ui/react";
import { Box, InputRightElement } from "@chakra-ui/react";
import React from 'react'

const BottomTextPart = () => {
    return (
        <Box textAlign='center' marginTop="5px" marginLeft="100px">
             <HStack direction={["column", "row"]}>
            <text>Already have an account?</text>
           <Link color="blue">Sign In?</Link>
            </HStack>
        </Box>
    )
}

export default BottomTextPart
