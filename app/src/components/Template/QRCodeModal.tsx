import { IFormSchema, useForm, Field } from "src/hooks/useForm";
import { addProfile, uploadPhoto } from "src/db/api";
import { getSession } from "src/utils/session";
import Router from "next/router";
import { FaPrint } from 'react-icons/fa';
import QRCode from 'qrcode.react';

import {
    useDisclosure,
    Box,
    Button,
    ButtonGroup,
    Flex,
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
                      <ButtonGroup marginTop="20px" spacing={4} width={[
                              "15%", // base
                              "25%", // 480px upwards
                              "50%", // 768px upwards
                              "100%", // 992px upwards
                            ]}>
                        <Button leftIcon="download" onClick={onOpen} variantColor="teal" marginBottom="12px">
                            Save image
                        </Button>
                        <Button leftIcon="copy" onClick={onOpen} variantColor="teal" marginBottom="12px">
                            Copy image
                        </Button>
                        <Button leftIcon={FaPrint} onClick={onOpen} variantColor="teal" marginBottom="12px">
                            Send to print
                        </Button>
                      </ButtonGroup>
                    </Flex>

                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
