import React from "react";
import { Heading, Text } from "@chakra-ui/core";
import Card from "src/components/Card";

interface ICardInfo {
    title: string;
    content: string;
}

export default (props: ICardInfo): JSX.Element => (
    <Card>
        <Heading as="h4" size="md">
            {props.title}
        </Heading>
        <Text mt="8px">{props.content}</Text>
    </Card>
);
