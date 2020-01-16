import { IFormSchema, useForm, Field } from "src/hooks/useForm";
import { addProfile } from "src/db/api";
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
const AGE = "age";
const INTEREST = "interest";
const SKILLS = "skills";
const QUALITIES = "qualities";
const OTHERS = "others";
const IMPORTANT = "important";
const SUPPORT = "support";

const schema: IFormSchema = {
    [NAME]: { type: "text", name: "Name" },
    [AGE]: { type: "number", name: "Age" },
    [INTEREST]: {
        type: "textarea",
        name: "Let others know more about what I like & know",
        helpertext: (
            <>
                <div>Your interests</div>
                <div>What makes you unique?</div>
                <div>What have you learnt?</div>
            </>
        )
    },
    [SKILLS]: {
        type: "textarea",
        name: "Let others know more about what I can do",
        helpertext: (
            <>
                <div>What are you good at?</div>
                <div>What you do everyday?</div>
                <div>What you enjoy doing?</div>
                <div>What are your proudest achievements?</div>
            </>
        )
    },
    [QUALITIES]: {
        type: "textarea",
        name: "Let others know more about what people like about me",
        helpertext: <div>What people say are your positive qualities</div>
    },
    [OTHERS]: {
        type: "textarea",
        name: "Let others know more about what I can do for others",
        helpertext: (
            <>
                <div>What you do for your friends or family</div>
                <div>How you are contributing now</div>
            </>
        )
    },
    [IMPORTANT]: {
        type: "textarea",
        name: "Let others know more about what is important to me",
        helpertext: (
            <>
                <div>What makes you happy</div>
                <div>Where your favourite places are</div>
                <div>What is your favourite possession</div>
                <div>What motivates you</div>
                <div>What you cannot live without</div>
            </>
        )
    },
    [SUPPORT]: {
        type: "textarea",
        name: "Let others know more about how to best support me",
        helpertext: (
            <>
                <div>How to best communicate with you</div>
                <div>What helps you learn better</div>
                <div>What helps calm you down</div>
            </>
        )
    }
};

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const form = useForm(schema);

    const submit = async () => {
        const newKey = await addProfile(getSession(), {
            name: form.getValue(NAME),
            age: form.getValue(AGE),
            interest: form.getValue(INTEREST),
            skills: form.getValue(SKILLS),
            qualities: form.getValue(QUALITIES),
            others: form.getValue(OTHERS),
            important: form.getValue(IMPORTANT),
            support: form.getValue(SUPPORT)
        });
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
                        <Field.Input id={AGE} form={form} width={"20%"} />
                        <Field.Input id={INTEREST} form={form} />
                        <Field.Input id={SKILLS} form={form} />
                        <Field.Input id={QUALITIES} form={form} />
                        <Field.Input id={OTHERS} form={form} />
                        <Field.Input id={IMPORTANT} form={form} />
                        <Field.Input id={SUPPORT} form={form} />
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
