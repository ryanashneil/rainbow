import { isLoggedIn, logout } from "src/utils/session";
import Segment from "src/components/Layout/Segment";
import { Flex, Button } from "@chakra-ui/core";

export interface ISessionHeader {
    backButton?: JSX.Element;
}

export default (props: ISessionHeader) => (
    <Segment height={30} background="#323233">
        <Flex direction="row-reverse" justifyContent="space-between">
            {isLoggedIn() && (
                <Button
                    variant="unstyled"
                    color="white"
                    size="xs"
                    onClick={logout}
                >
                    Log out
                </Button>
            )}
            {props.backButton && props.backButton}
        </Flex>
    </Segment>
);
