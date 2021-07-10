import { Box, Flex, Heading, HStack, Link, Text, Button, Icon } from "@chakra-ui/react";
import { AiOutlineFieldTime } from "react-icons/ai";
export default function MeetingCard({ courseName, startTime, endTime, active }: any) {
    return (
        <Box w="90%" h="110px"
            rounded="10px"
            backgroundColor="white"
            boxShadow="sm"
            p={4}
            mb="20px"
        >

            <Flex flexDir="row" justifyContent="space-between" h="100%" w="100%">

                <Flex flexDir="column" justifyContent="center" >
                    <Heading size="md" mb="15px">{courseName}</Heading>
                    <Heading size="sm" color="gray.500" >{startTime} - {endTime} </Heading>
                </Flex>

                <Flex
                    display={active ? "flex" : "none"}>
                    <HStack spacing={8}>
                        <Link >
                            <Text color="#56CAD8" as="u">Share Meeting</Text>
                        </Link>
                        <Button
                            background="#56CAD8"
                            textColor="white"
                            borderRadius="10px"
                            _focus={{ border: 'none' }}
                        >
                            Start NOW
                        </Button>
                    </HStack>
                </Flex>

                <Flex
                    display={active ? "none" : "active"}
                    color="gray.400"
                    mt="25px"
                    mr="10px"
                >
                    <HStack spacing={2}>
                        <Icon as={AiOutlineFieldTime} fontSize="2xl" />
                        <Text>in 2 hrs</Text>
                    </HStack>

                </Flex>
            </Flex>
        </Box>
    )
}