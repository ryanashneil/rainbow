import React from "react";
import Router from "next/router";
import { Heading, Text, Box, PseudoBox, Icon } from "@chakra-ui/core";
import { color } from "styles/tokens";

interface ICardInfo {
    name: string;
    age: number;
    id: string;
}

export default (props: ICardInfo): JSX.Element => {
    const goToProfile = (): void => {
        Router.push("/details?id=" + props.id);
    };
    return (
        <PseudoBox
            as="button"
            borderRadius="8px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="24px"
            width="100%"
            boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
            textAlign="left"
            onClick={goToProfile}
            _hover={{ background: color.grey.v1 }}
        >
            <Box>
                <Heading size="md">{props.name}</Heading>
                <Text mt="4px">{props.age} years old</Text>
            </Box>
            <Icon name="chevron-right" size="32px" opacity={0.3} />
        </PseudoBox>
    );
};
