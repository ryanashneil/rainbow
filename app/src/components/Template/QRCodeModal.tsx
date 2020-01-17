import { IFormSchema, useForm, Field } from "src/hooks/useForm";
import { addProfile, uploadPhoto } from "src/db/api";
import { getSession } from "src/utils/session";
import Router from "next/router";
import { FaPrint } from 'react-icons/fa';
import QRCode from 'qrcode.react';
import React from 'react';
import { useClipboard } from 'use-clipboard-copy';

import {
    useDisclosure,
    Box,
    Button,
    ButtonGroup,
    Flex,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton
} from "@chakra-ui/core";

interface IModal {
    name: string;
}

export default (props: IModal) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const clipboard = useClipboard();

    return (
        <>
            <Button leftIcon="add" onClick={onOpen} variantColor="teal">
                Generate QR
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="700px">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>QR code generated!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    <Flex alignItems="center" direction="column">
                      <Box padding="20px">
                      You can now use {props.name}'s personal QR code.
                      </Box>
                      <QRCode padding="20px" size="100" value="www.google.com"/>
                        <Flex direction={["column", "column", "row"]}>
                        <Button leftIcon="download" onClick={onOpen} variantColor="teal" margin="10px">
                            Save image
                        </Button>
                        //<input ref={clipboard.target} value="I AM COPIED"/>
                        <Button leftIcon="copy" onClick={clipboard.copy} variantColor="teal" margin="10px">
                            {clipboard.copied ? 'Image copied' : 'Copy image'}
                        </Button>
                        <Button leftIcon={FaPrint} onClick={onOpen} variantColor="teal" margin="10px">
                            Send to print
                        </Button>
                        </Flex>
                    </Flex>

                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
