import React from 'react'
import { Stack, HStack, VStack, Link } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Text,
  } from '@chakra-ui/react'
const TopPart = () => {
    return (
            <HStack>
            <ArrowBackIcon color='#9EA0A5'/>
            <Link color='#9EA0A5' fontSize='14px' align='left'>Go back</Link>
            </HStack>
    )
}

export default TopPart
