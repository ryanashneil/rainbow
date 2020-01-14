import Segment from "components/Segment";
import { color } from "styles/tokens";
import { Heading, Text } from "@chakra-ui/core";

interface INavbar {
    title?: string;
    subtitle?: string;
}

export default (props: INavbar): JSX.Element => (
    <Segment height={120} background={color.primary.v1}>
        {props.title && <Heading color="white">{props.title}</Heading>}
        {props.subtitle && <Text color="white">{props.subtitle}</Text>}
    </Segment>
);
