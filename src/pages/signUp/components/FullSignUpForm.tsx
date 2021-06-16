import { Header } from 'src/pages/landing/components/Header';
import { Footer } from 'src/pages/landing/components/Footer';
import React from 'react'
import { Box } from '@chakra-ui/layout';
import SignUp from './SignUp';
const FullSignUpForm = () => {
    return (
        <Box paddingX={[4, 4, 20]} paddingTop={[4, 4, 10]} minW="400px" bgColor="#31B3C2">
            <Header bgColor="#31B3C2"/>
            <SignUp/>
            <Footer/>
        </Box>
    )
}

export default FullSignUpForm
