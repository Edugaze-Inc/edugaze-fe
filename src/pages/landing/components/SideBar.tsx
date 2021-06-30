import {
    Avatar,
    Divider,
    Flex,
    Heading,
    IconButton
} from "@chakra-ui/react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useState } from "react";

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large");
    const themeColor = "#56CAD8";

    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            borderShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContents="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider />
                <Flex mt={4} align="center">
                    <Avatar size="sm" background={themeColor} />
                    <Flex
                        flexDir="row"
                        ml={4}
                        display={navSize === "small" ? "none" : "flex"}
                    >
                        <Heading as="h3" size="sm" textColor={themeColor}>
                            John Doe
                        </Heading>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    aria-label="Expand Navbar"
                    background="none"
                    mt={5}
                    _hover={{ background: "none" }}
                    icon={<GoChevronRight color={themeColor} />}
                    onClick={() => {
                        if (navSize === "small") changeNavSize("large");
                        else changeNavSize("small");
                    }}
                />
            </Flex>
        </Flex>
    );
}
