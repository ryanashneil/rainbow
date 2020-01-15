import React from "react";
import { color } from "styles/tokens";
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
    items: IAccordionItem[];
}

const Item = (props: IAccordionItem) => (
    <AccordionItem defaultIsOpen={true} marginLeft="-20px" marginRight="-20px">
        <AccordionHeader paddingTop={4} paddingBottom={4}>
            <Box
                flex="1"
                textAlign="left"
                color={color.primary.v1}
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
    return (
        <Accordion allowMultiple={true}>
            {props.items.map(item => (
                <Item
                    key={item.title}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </Accordion>
    );
};
