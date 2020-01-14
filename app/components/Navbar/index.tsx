import Segment from "components/Segment";
import styled from '@emotion/styled';
import { Button } from "@chakra-ui/core";
import { color } from "styles/tokens";

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img {
        width: 125px;
    }
`

export default (): JSX.Element => (
    <Segment width={1200} height={60} background={color.primary.v1}>
        <NavContainer>
        </NavContainer>
    </Segment>
)