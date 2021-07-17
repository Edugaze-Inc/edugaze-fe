import { Flex, Text, Icon, Link, Menu, MenuButton } from '@chakra-ui/react';
import {
  AiOutlineCalendar,
  AiOutlineHistory,
  AiOutlineBarChart,
} from 'react-icons/ai';

export default function NavItem({ icon, title, active, navSize, onClick }: any) {
  switch (title) {
    case "Calendar": icon = AiOutlineCalendar; break;
    case "History": icon = AiOutlineHistory; break;
    case "Statistics": icon = AiOutlineBarChart; break;
  }
  return (
    <Flex
      mt="25px"
      flexDir="column"
      w="100%"
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
      onClick={onClick}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && ' rgba(145, 206, 199, 0.26)'}
          border={active && '2px'}
          borderColor={'rgba(86, 202, 216, 1)'}
          p="8px"
          borderRadius={8}
          _hover={{
            textDecor: 'none',
            background: 'rgba(145, 206, 199, 0.26)',
          }}
          w={navSize === 'large' ? '140px' : '40px'}
        >
          <MenuButton w="100%">
            <Flex color={active ? 'rgba(86, 202, 216, 1)' : 'gray.400'}>
              <Icon as={icon} fontSize="2xl" />
              <Text ml="14px" display={navSize === 'small' ? 'none' : 'flex'}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
