import { Header } from 'src/pages/landing/components/Header';
import { Footer } from 'src/pages/landing/components/Footer';
import { Box } from '@chakra-ui/layout';
import { Landing1 } from './Landing1';
import { Landing2 } from './Landing2';
import { Landing3 } from './Landing3';
import { Landing4 } from './Landing4';
import { Landing5 } from './Landing5';

export const Landing = () => (
  <Box paddingX={[4, 4, 20]} paddingTop={[4, 4, 10]} minW="400px">
    <Header />
    <Landing1 />
    <Landing2 />
    <Landing3 />
    <Landing4 />
    <Landing5 />
    <Footer />
  </Box>
);
