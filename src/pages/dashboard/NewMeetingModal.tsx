import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNewMeetingMutation } from './hooks/useNewMeetingMutation';

type Params = {
  title: string;
  course: string;
  startTime: string;
  endTime: string;
};

const initialState = {
  course: '',
  title: '',
  startTime: '',
  endTime: '',
};
export function NewMeetingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const toast = useToast();
  const _onClose = () => {
    setMeeting(initialState);
    onClose();
  };
  const [meeting, setMeeting] = useState<Params>(initialState);
  const { createMeating: createMeeting } = useNewMeetingMutation({
    onSuccess: () => {
      toast({ status: 'success', description: 'Meeting created!' });
      _onClose();
    },
    onError: (error) => {
      toast({
        status: 'error',
        description: error?.response?.data ?? 'An error occured!',
      });
    },
  });
  function compareTime() {
    var startTime = new Date(meeting.startTime);
    var endTime = new Date(meeting.endTime);
    if (startTime.getTime() > endTime.getTime()) {
      toast({
        status: 'error',
        description: 'Meeting end time cannot be earlier than start time',
      });
      return;
    } else createMeeting(meeting);
  }
  return (
    <Modal isOpen={isOpen} onClose={_onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Meeting</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Meeting Title</FormLabel>
            <Input
              onChange={(e) =>
                setMeeting((old) => ({ ...old, title: e.target.value }))
              }
              value={meeting.title}
              placeholder="Meeting title"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Course Name</FormLabel>
            <Input
              onChange={(e) =>
                setMeeting((old) => ({ ...old, course: e.target.value }))
              }
              value={meeting.course}
              placeholder="Course name"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Start Time</FormLabel>
            <Input
              min={new Date().toISOString().slice(0, -8)}
              value={meeting.startTime}
              onChange={(e) =>
                setMeeting((old) => ({ ...old, startTime: e.target.value }))
              }
              type="datetime-local"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>End Time</FormLabel>
            <Input
              value={meeting.endTime}
              type="datetime-local"
              disabled={!meeting.startTime}
              min={meeting.startTime}
              onChange={(e) => {
                setMeeting((old) => ({ ...old, endTime: e.target.value }));
              }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            background="#56CAD8"
            textColor="white"
            // onClick={() => createMeating(meeting)}
            onClick={() => compareTime()}
            mr={3}
            _focus={{ border: 'none' }}
          >
            Create
          </Button>
          <Button onClick={_onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
