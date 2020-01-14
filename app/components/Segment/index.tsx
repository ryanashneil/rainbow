import React from "react";
import { Box } from "@chakra-ui/core";

interface IProps extends React.Props<{}> {
    background?: string;
    height?: number;
    width?: number;
    marginTop?: string;
}

export default (props: IProps): JSX.Element => (
    <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height={props.height}
        padding="0 20px"
        background={props.background || "transparent"}
        marginTop={props.marginTop || "auto"}
    >
        <Box maxWidth={props.width || "700px"} width="100%">
            {props.children}
        </Box>
    </Box>
);
