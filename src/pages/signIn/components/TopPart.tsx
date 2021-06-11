import React from 'react'
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Text,
  } from '@chakra-ui/react'
const TopPart = () => {
    return (
            <HStack>
            <ArrowBackIcon color='#9EA0A5'/>
            <Text color='#9EA0A5' fontSize='14px' align='left'>Go back</Text>
            </HStack>
    )
}

export default TopPart
