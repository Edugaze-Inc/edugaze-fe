import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
} from '@chakra-ui/react'

export default function NavItem({ icon, title, active, navSize }: any) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && " rgba(145, 206, 199, 0.26)"}
                    border={active && "2px"}
                    borderColor={"rgba(86, 202, 216, 1)"}
                    p="8px"
                    borderRadius={8}
                    _hover={{ textDecor: 'none' }}
                    w={navSize === "large" ? "140px" : "40px"}

                >
                    <MenuButton w="100%">
                        <Flex color={active ? "rgba(86, 202, 216, 1)" : "#E2E2E2"}>
                            <Icon as={icon} fontSize="2xl" />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}
