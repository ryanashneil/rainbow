import Segment from "components/Segment";
import { color } from "styles/tokens";
import { Heading, Text, Box, Flex } from "@chakra-ui/core";

export interface INavbar {
    title?: string;
    subtitle?: string;
}

export default (props: INavbar): JSX.Element => (
    <Segment height={120} background={color.grey.v1}>
        <Flex justifyContent="space-between">
            <Box>
                {props.title && <Heading>{props.title}</Heading>}
                {props.subtitle && <Text>{props.subtitle}</Text>}
            </Box>
        </Flex>
    </Segment>
);
