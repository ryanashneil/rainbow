import React from "react";
import Router from "next/router";
import { Heading, Text, Box } from "@chakra-ui/core";

interface ICardInfo {
    name: string;
    age: number;
}

export default (props: ICardInfo): JSX.Element => {
    const goToProfile = (): void => {
        Router.push("/user?id=" + props.name);
    };
    return (
        <Box
            as="button"
            borderRadius="8px"
            padding="24px"
            width="100%"
            boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
            marginBottom="24px"
            textAlign="left"
            onClick={goToProfile}
        >
            <Box>
                <Heading size="md">{props.name}</Heading>
                <Text mt="4px">{props.age} years old</Text>
            </Box>
        </Box>
    );
};
