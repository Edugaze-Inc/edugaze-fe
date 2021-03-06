import React from 'react';
import { HStack, Link } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const TopPart = () => {
  return (
    <HStack align="left">
      <ArrowBackIcon color="#9EA0A5" />
      <Link as={RouterLink} color="#9EA0A5" fontSize="14px" to="/">
        Go back
      </Link>
    </HStack>
  );
};

export default TopPart;
