import { IFormSchema, useForm, Field } from "src/hooks/useForm";
import { addProfile, uploadPhoto, updateProfile } from "src/db/api";
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
import FileUpload from "src/components/FileUpload";
import { useState } from "react";
import SpinnerOverlay from "../Spinner/SpinnerOverlay";

const NAME = "name";
const AGE = "age";
const INTEREST = "What I like & know";
const SKILLS = "What I can do";
const QUALITIES = "What people like about me";
const OTHERS = "What I can do for others";
const IMPORTANT = "What is important to me";
const SUPPORT = "How to best support me";

const schema: IFormSchema = {
    [NAME]: { type: "text", name: "Name" },
    [AGE]: { type: "number", name: "Age" },
    [INTEREST]: {
        type: "textarea",
        name: "Share what you like & learnt",
        helpertext: (
            <>
                <div>What are your interests?</div>
                <div>What makes you unique?</div>
                <div>What have you learnt?</div>
            </>
        )
    },
    [SKILLS]: {
        type: "textarea",
        name: "Share what you can do",
        helpertext: (
            <>
                <div>What are you good at?</div>
                <div>What do you do everyday?</div>
                <div>What do you enjoy doing?</div>
                <div>What are your proudest achievements?</div>
            </>
        )
    },
    [QUALITIES]: {
        type: "textarea",
        name: "Share what people like about you",
        helpertext: <div>What do people say are your positive qualities?</div>
    },
    [OTHERS]: {
        type: "textarea",
        name: "Share what you can do for others",
        helpertext: (
            <>
                <div>What do you do for your friends or family?</div>
                <div>How you are contributing now?</div>
            </>
        )
    },
    [IMPORTANT]: {
        type: "textarea",
        name: "Share what is important to you",
        helpertext: (
            <>
                <div>What makes you happy?</div>
                <div>Where are your favourite places?</div>
                <div>What is your favourite possession?</div>
                <div>What motivates you?</div>
                <div>What can you not live without?</div>
            </>
        )
    },
    [SUPPORT]: {
        type: "textarea",
        name: "Let others know more about how to best support you",
        helpertext: (
            <>
                <div>How to best communicate with you?</div>
                <div>What helps you learn better?</div>
                <div>What helps calm you down?</div>
            </>
        )
    }
};

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [file, setFile] = useState<any>(undefined);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm(schema);

    const submit = async () => {
        const id = getSession();
        const newKey = await addProfile(id, {
            name: form.getValue(NAME),
            age: form.getValue(AGE),
            info: {
                [INTEREST]: form.getValue(INTEREST),
                [SKILLS]: form.getValue(SKILLS),
                [QUALITIES]: form.getValue(QUALITIES),
                [OTHERS]: form.getValue(OTHERS),
                [IMPORTANT]: form.getValue(IMPORTANT),
                [SUPPORT]: form.getValue(SUPPORT)
            }
        });
        if (file) {
            const imageURL = await uploadPhoto(newKey, file);
            await updateProfile(id, newKey, { image: imageURL });
        }
        Router.push(`/details.html?id=${newKey}`);
        onClose();
    };

    const handleClick = async () => {
        setIsSubmitting(true);
        await submit();
        setIsSubmitting(false);
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
                        <FileUpload
                            title="Upload a Photo"
                            filledTitle="Replace Photo"
                            id="photo"
                            file={file}
                            setFile={setFile}
                        />
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
                            onClick={handleClick}
                        >
                            Submit
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {isSubmitting && <SpinnerOverlay />}
        </>
    );
};
