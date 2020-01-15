import React from "react";
import { color } from "src/styles/tokens";
import EmptyState from "src/components/EmptyState";
import {
    Accordion,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    Box,
    AccordionPanel
} from "@chakra-ui/core";

export interface IAccordionItem {
    title: string;
    content: string;
}

interface IAccordion {
    emptyState?: [string, string];
    items: { [key: string]: string };
}

const Item = (props: IAccordionItem) => (
    <AccordionItem defaultIsOpen={true} marginLeft="-20px" marginRight="-20px">
        <AccordionHeader paddingTop={4} paddingBottom={4}>
            <Box
                flex="1"
                textAlign="left"
                color={color.primary.v1}
                fontSize="20px"
                fontWeight="medium"
            >
                {props.title}
            </Box>
            <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={8}>{props.content}</AccordionPanel>
    </AccordionItem>
);

export default (props: IAccordion) => {
    if (!props.items && props.emptyState) {
        return (
            <EmptyState
                message={props.emptyState[0]}
                imagePath={props.emptyState[1]}
            />
        );
    }
    if (!props.items) {
        return <div>No data found</div>;
    }
    return (
        <Accordion allowMultiple={true}>
            {Object.keys(props.items).map(key => (
                <Item key={key} title={key} content={props.items[key]} />
            ))}
        </Accordion>
    );
};
