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
    Flex,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Avatar
} from "@chakra-ui/core";

interface IModal {
    name: string;
    id: string;
    user: string;
    img?: string;
}

export default (props: IModal) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const URL = `https://raindex-passport.web.app/view.html?id=${props.id}&ref=${props.user}`;
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
                                You can now use {props.name}&#39;s personal QR
                                code.
                            </Box>
                            <Avatar
                                name={props.name}
                                src={props.img}
                                size={"2xl"}
                                marginBottom={8}
                                marginTop={8}
                            />
                            <QRCode
                                padding="20px"
                                size="100"
                                value={URL}
                                style={{ maxWidth: "90%" }}
                            />
                            <Flex
                                marginTop="40px"
                                marginBottom="100px"
                                direction={["column", "column", "row"]}
                            >
                                <Button
                                    leftIcon="download"
                                    onClick={onOpen}
                                    variantColor="teal"
                                    margin="8px"
                                >
                                    Save image
                                </Button>
                                <Button
                                    leftIcon="copy"
                                    onClick={onOpen}
                                    variantColor="blue"
                                    margin="8px"
                                >
                                    Copy image
                                </Button>
                                <Button
                                    leftIcon={FaPrint}
                                    onClick={onOpen}
                                    margin="8px"
                                >
                                    Send to print
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>

                    </ModalBody>
                <ModalFooter></ModalFooter>
                </ModalContent>
        </Modal>
        </>
    );
};
