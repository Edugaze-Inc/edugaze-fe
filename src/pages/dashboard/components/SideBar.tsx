import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Avatar,
  IconButton,
  Link,
  Icon,
} from '@chakra-ui/react';
import eye_logo from 'src/assets/eye_logo.svg';
import { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineHistory,
  AiOutlineBarChart,
  AiOutlineSetting,
  AiOutlineRight,
  AiOutlineLeft,
} from 'react-icons/ai';
import { BiDoorOpen } from 'react-icons/bi';
import NavItem from './NavItem';
import { useMeQuery } from 'src/hooks/useMeQuery';
import { logout } from 'src/hooks/useMeQuery';

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large');
  const themeColor = '#56CAD8';
  const meQuery = useMeQuery();
  return (
    <Flex
      w={navSize === 'small' ? '81px' : '262px'}
      flexDir="column"
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
      background="white"
    >
      <Flex flexDir="column" justifyContent="space-between" w="100%">
        <Flex as="nav" w={navSize === 'small' ? '53px' : '206px'} mt="28px">
          <Image
            w="53px"
            ml={navSize === 'small' ? '14px' : '28px'}
            src={eye_logo}
          ></Image>
          <Heading
            ml="13px"
            fontSize="32px"
            alignSelf="center"
            color="#31B3C2"
            display={navSize === 'small' ? 'none' : 'flex'}
          >
            Edugaze
          </Heading>
        </Flex>
        {/* container of nav items */}
        <Flex
          flexDir="column"
          alignItems={navSize === 'small' ? 'center' : 'flex-start'}
          justifyContent="space-between"
          ml={navSize === 'small' ? '0px' : '28px'}
          mt="100px"
        >
          <Flex mt={4} align="center" mb={30}>
            <Avatar size="sm" background={themeColor} />
            <Flex
              flexDir="row"
              ml={4}
              display={navSize === 'small' ? 'none' : 'flex'}
            >
              <Heading as="h3" size="sm" textColor={themeColor}>
                {meQuery.data?.username}
              </Heading>
            </Flex>
          </Flex>

          <Divider w={navSize === 'small' ? '40px' : '206px'} align="center" />

          {/* individual nav items */}
          <NavItem icon={AiOutlineHome} title="Home" navSize={navSize} active />
          <NavItem
            icon={AiOutlineCalendar}
            title="Calendar"
            navSize={navSize}
          />
          <NavItem icon={AiOutlineHistory} title="History" navSize={navSize} />
          <NavItem
            icon={AiOutlineBarChart}
            title="Statistics"
            navSize={navSize}
          />
          {/* <NavItem icon={AiOutlineSetting} title="Settings" navSize={navSize} /> */}

          <Link mt="25px" color="#56CAD8" p="8px"
          onClick={logout}>
            <Flex flexDir="row">
              <Icon as={BiDoorOpen} fontSize="2xl" />
              <Text
                as="u"
                ml="14px"
                display={navSize === 'small' ? 'none' : 'flex'}
              >
                Logout
              </Text>
            </Flex>
            
          </Link>

          {/* toggle navbar button */}
          <Flex flexDir="row" align="center" mt="33px" mb="33px" pos="sticky">
            <IconButton
              aria-label="Expand Navbar"
              background="none"
              w="100%"
              icon={
                navSize === 'small' ? (
                  <AiOutlineRight color={themeColor} />
                ) : (
                  <AiOutlineLeft color={themeColor} />
                )
              }
              onClick={() => {
                if (navSize === 'small') changeNavSize('large');
                else changeNavSize('small');
              }}
              _focus={{ border: 'none' }}
            />
            <Flex
              flexDir="row"
              ml="20px"
              display={navSize === 'small' ? 'none' : 'flex'}
            >
              <Text size="md" textColor={themeColor} fontWeight="bold">
                Collapse
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
