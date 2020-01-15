import React from "react";
import { Box } from "@chakra-ui/core";

interface ICardProps extends React.Props<{}> {
    marginBottom?: string;
    as?: React.ElementType<any>;
}

export default (props: ICardProps): JSX.Element => (
    <Box
        as={props.as || "div"}
        borderRadius="8px"
        padding="24px"
        boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        marginBottom={props.marginBottom || 0}
    >
        {props.children}
    </Box>
);
