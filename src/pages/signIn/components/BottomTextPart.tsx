import { HStack, Link} from "@chakra-ui/react";
import { Box, InputRightElement } from "@chakra-ui/react";
import React from 'react'

import {
  Link as RouterLink
} from "react-router-dom";

const BottomTextPart = () => {
    return (
        <Box textAlign='center' marginTop="5px" marginLeft="100px">
             <HStack direction={["column", "row"]}>
            <text>Don't have an account?</text>
           <Link as={RouterLink} color="blue" to="/signup">Sign up?</Link>
            </HStack>
        </Box>
    )
}

export default BottomTextPart
