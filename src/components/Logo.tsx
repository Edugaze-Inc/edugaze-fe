import { Image } from '@chakra-ui/image';
import { ImageProps } from '@chakra-ui/react';
import logo from 'src/assets/logo.png';

export const Logo = (props: ImageProps) => <Image {...props} src={logo} />;
