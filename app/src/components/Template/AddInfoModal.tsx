import { IFormSchema, useForm, Field } from "src/hooks/useForm";
import { addProfile } from "src/db/api";
import { getSession } from "src/utils/session";

import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Flex
} from "@chakra-ui/core";

const TITLE = "title";
const DESCRIPTION = "description";

const schema: IFormSchema = {
    [TITLE]: {
        type: "text",
        name: "Title",
        placeholder: "What do you want to share?"
    },
    [DESCRIPTION]: {
        type: "textarea",
        name: "Description",
        placeholder: "Tell us more!"
    }
};

interface IModal {
    onSubmit: () => void;
}

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const form = useForm(schema);

    const submit = async () => {
        // await addProfile(getSession(), { name: form.getValue(NAME) });
        // props.onSubmit();
        onClose();
    };

    return (
        <>
            <Flex justifyContent="center" alignItems="center" width="100%">
                <Button leftIcon="add" onClick={onOpen} variantColor="teal">
                    Add New Section
                </Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} size="700px">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Section</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Field.Input id={TITLE} form={form} />
                        <Field.Input id={DESCRIPTION} form={form} />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            marginBottom="12px"
                            variantColor="teal"
                            mr={3}
                            onClick={submit}
                        >
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
