import { Flex, Heading, Icon, Image, Link, Text, Divider, Avatar, IconButton } from "@chakra-ui/react";
import eye_logo from 'src/assets/eye_logo.svg';
import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineCalendar,
    AiOutlineHistory,
    AiOutlineBarChart,
    AiOutlineSetting,
    AiOutlineMenu,
    AiOutlineRight,
    AiOutlineLeft
} from "react-icons/ai";
import NavItem from "../landing/components/NavItem"
const themeColor = "#56CAD8";

export const DashboardHomepage = () => {
    const [navSize, changeNavSize] = useState("large");

    return (

        <Flex
            h="100vh"
            flexDir="row"
            overflow="hidden"
            maxW="2000px"
            background="#F9F9F9"

        >
            {/* Sidebar */}
            <Flex
                pos="sticky"
                w={navSize === "small" ? "81px" : "262px"}
                h="100vh"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                background="white"
            >
                <Flex
                    flexDir="column"
                    justifyContent="space-between"
                    w="100%"
                >
                    <Flex
                        as="nav"
                        w={navSize === "small" ? "53px" : "206px"}
                        mt="28px"
                    >
                        <Image w="53px"
                            ml={navSize === "small" ? "14px" : "28px"}
                            src={eye_logo}></Image>
                        <Heading
                            ml="13px"
                            fontSize="32px"
                            alignSelf="center"
                            color="#31B3C2"
                            display={navSize === "small" ? "none" : "flex"}
                        >
                            Edugaze
                        </Heading>

                    </Flex>

                    {/* container of nav items */}
                    <Flex
                        flexDir="column"
                        alignItems={navSize === "small" ? "center" : "flex-start"}
                        justifyContent="space-between"
                        ml={navSize === "small" ? "0px" : "28px"}
                        mt="100px">
                        <Flex mt={4} align="center" mb={30}>
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

                        <Divider w={navSize === "small" ? "40px" : "206px"}
                            align="center" />

                        {/* individual nav items */}
                        <NavItem icon={AiOutlineHome} title="Home" navSize={navSize} active />
                        <NavItem icon={AiOutlineCalendar} title="Calendar" navSize={navSize} />
                        <NavItem icon={AiOutlineHistory} title="History" navSize={navSize} />
                        <NavItem icon={AiOutlineBarChart} title="Statistics" navSize={navSize} />
                        <NavItem icon={AiOutlineSetting} title="Settings" navSize={navSize} />




                        {/* toggle navbar button */}
                        <Flex
                            flexDir="row"
                            align="center"

                            mt="33px"
                            mb="33px"
                        >
                            <IconButton
                                aria-label="Expand Navbar"
                                background="none"
                                w="100%"
                                icon={navSize === "small" ? <AiOutlineRight color={themeColor} /> : <AiOutlineLeft color={themeColor} />}
                                onClick={() => {
                                    if (navSize === "small") changeNavSize("large");
                                    else changeNavSize("small");
                                }}
                            />
                            <Flex
                                flexDir="row"
                                ml="20px"
                                display={navSize === "small" ? "none" : "flex"}
                            >
                                <Text size="md" textColor={themeColor} fontWeight="bold">
                                    Collapse
                                </Text>
                            </Flex>

                        </Flex>

                    </Flex>


                    <Flex></Flex>

                </Flex>




            </Flex>

            {/* homepage */}
            <Flex></Flex>

            <Flex></Flex>

        </Flex>
    );
}
