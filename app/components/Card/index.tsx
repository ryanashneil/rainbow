import React from "react";
import { Box } from "@chakra-ui/core";

export default (props: React.Props<{}>): JSX.Element => (
    <Box
        borderRadius="8px"
        padding="24px"
        boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    >
        {props.children}
    </Box>
);
