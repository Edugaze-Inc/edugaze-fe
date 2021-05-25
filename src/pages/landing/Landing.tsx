import { Header } from 'src/pages/landing/components/Header';
import { Box } from '@chakra-ui/layout';
import { Landing1 } from './Landing1';
import { Landing2 } from './Landing2';

export const Landing = () => (
  <Box paddingX={20} paddingTop={10}>
    <Header />
    <Landing1 />
    <Landing2 />
  </Box>
);
