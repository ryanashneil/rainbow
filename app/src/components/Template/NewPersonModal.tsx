import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton
} from "@chakra-ui/core";

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    if (!isOpen) {
        return (
            <Button leftIcon="add" onClick={onOpen} variantColor="teal">
                New Profile
            </Button>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="700px">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody></ModalBody>
                <ModalFooter>
                    <Button marginBottom="12px" variantColor="teal" mr={3}>
                        Submit
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
