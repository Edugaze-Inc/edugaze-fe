import { Flex, Heading, Icon, Image, Link, Text, Divider, Avatar, IconButton } from "@chakra-ui/react";
import eye_logo from 'src/assets/eye_logo.svg';
import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineCalendar,
    AiOutlineHistory,
    AiOutlineBarChart,
    AiOutlineSetting,
    AiOutlineRight,
    AiOutlineLeft
} from "react-icons/ai";
import Sidebar from "../landing/components/SideBar";
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
            <Sidebar />

            {/* homepage */}
            <Flex></Flex>

            <Flex></Flex>

        </Flex>
    );
}
