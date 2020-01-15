import Segment from "src/components/Layout/Segment";
import { color } from "src/styles/tokens";
import { Heading, Text, Box, Flex } from "@chakra-ui/core";

export interface INavbar {
    title?: string;
    subtitle?: string;
    RightElement?: () => JSX.Element;
}

export default (props: INavbar): JSX.Element => (
    <Segment height={120} background={color.grey.v1}>
        <Flex justifyContent="space-between" alignItems="center">
            <Box>
                {props.title && <Heading>{props.title}</Heading>}
                {props.subtitle && (
                    <Text marginTop="8px">{props.subtitle}</Text>
                )}
            </Box>
            {props.RightElement && <props.RightElement />}
        </Flex>
    </Segment>
);
