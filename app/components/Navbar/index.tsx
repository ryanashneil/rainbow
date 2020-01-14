import Segment from "components/Segment";
import styled from '@emotion/styled';
import { color } from "styles/tokens";
import { Heading } from "@chakra-ui/core";


interface INavbar {
    title?: string;
}

export default (props: INavbar): JSX.Element => (
    <Segment height={120} background={color.primary.v1}>
        <Heading color='white'>{props.title}</Heading>
    </Segment>
)