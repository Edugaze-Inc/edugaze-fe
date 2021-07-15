import { Flex } from '@chakra-ui/react';
import { useMeQuery } from 'src/hooks/useMeQuery';
import Sidebar from './components/SideBar';
import Homepage from './MeetingsPage';

export const DashboardHomepage = () => {
  useMeQuery({ refetchOnMount: true });
  return (
    <Flex
      h="100vh"
      flexDir="row"
      background="#F9F9F9"
      class="dashboard"
      overflow="hidden"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* homepage */}
      <Homepage />
    </Flex>
  );
};
