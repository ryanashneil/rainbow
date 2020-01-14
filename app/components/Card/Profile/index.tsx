import React from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/core";
import Card from "components/Card";

interface ICardInfo {
    name: string;
    age: number;
}

export default (props: ICardInfo): JSX.Element => (
    <Card>
        <Box>
            <Image width="100%" height="100px" />
            <Heading as="h4" size="md">
                {props.name}
            </Heading>
            <Text mt="4px">{props.age} years old</Text>
        </Box>
    </Card>
);
