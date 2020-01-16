import { IFormSchema, useForm, Field } from "src/hooks/useForm";
import { addProfile, uploadPhoto } from "src/db/api";
import { getSession } from "src/utils/session";
import Router from "next/router";

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

    const submit = async () => {
        const id = getSession();
        const newKey = await addProfile(id, {
            name: form.getValue(NAME)
        });
        uploadPhoto(id, Router);
        Router.push(`/details?id=${newKey}`);
        onClose();
    };

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
