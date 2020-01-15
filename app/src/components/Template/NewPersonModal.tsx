import { IFormSchema, useForm, Field } from "src/hooks/useForm";
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

const NAME = "name";

const schema: IFormSchema = {
    [NAME]: { type: "text", name: "Name" }
};

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const form = useForm(schema);

    return (
        <>
            <Button leftIcon="add" onClick={onOpen} variantColor="teal">
                New Profile
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="700px">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Field.Input id={NAME} form={form} />
                    </ModalBody>
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
        </>
    );
};
