import Segment from "components/Segment";
import { color } from "styles/tokens";
import { Heading, Text, Box, Flex, Button } from "@chakra-ui/core";
import { isLoggedIn, logout } from "utils/session";

export interface INavbar {
    title?: string;
    subtitle?: string;
}

const SessionHeader = (): JSX.Element => {
    if (!isLoggedIn()) return <div />;
    return (
        <Segment height={30} background="#252A2E">
            <Flex direction="row-reverse">
                <Button
                    variant="unstyled"
                    color="white"
                    size="xs"
                    onClick={logout}
                >
                    Log out
                </Button>
            </Flex>
        </Segment>
    );
};

export default (props: INavbar): JSX.Element => (
    <>
        <SessionHeader />
        <Segment height={120} background={color.grey.v1}>
            <Flex justifyContent="space-between">
                <Box>
                    {props.title && <Heading>{props.title}</Heading>}
                    {props.subtitle && (
                        <Text marginTop="8px">{props.subtitle}</Text>
                    )}
                </Box>
            </Flex>
        </Segment>
    </>
);
