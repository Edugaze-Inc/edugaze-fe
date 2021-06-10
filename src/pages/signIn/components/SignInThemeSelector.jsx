import { IconButton } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import React from 'react'

const SignInThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box textAlign='right' py={4}>
        <IconButton
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          onClick={toggleColorMode}
          variant='ghost'
        />
        </Box>
    )
}

export default SignInThemeSelector
