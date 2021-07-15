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
} from '@chakra-ui/react';
import { useState } from 'react';

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
  const [params, setParams] = useState<Params>(initialState);
  console.log(params.startTime);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setParams(initialState);
        onClose();
      }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Meeting</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Meeting Title</FormLabel>
            <Input value={params.title} placeholder="Meeting title" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Course Name</FormLabel>
            <Input value={params.course} placeholder="Course name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Start Time</FormLabel>
            <Input
              value={params.startTime}
              onChange={(e) =>
                setParams((old) => ({ ...old, startTime: e.target.value }))
              }
              type="datetime-local"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>End Time</FormLabel>
            <Input
              value={params.endTime}
              type="datetime-local"
              disabled={!params.startTime}
              min={params.startTime}
              onChange={(e) => {
                setParams((old) => ({ ...old, endTime: e.target.value }));
              }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            background="#56CAD8"
            textColor="white"
            mr={3}
            _focus={{ border: 'none' }}
          >
            Create
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
