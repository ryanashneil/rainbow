import { isLoggedIn, logout } from "src/utils/session";
import Segment from "src/components/Layout/Segment";
import { Flex, Button } from "@chakra-ui/core";

export default (): JSX.Element => (
    <Segment height={30} background="#323233">
        <Flex direction="row-reverse">
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
        </Flex>
    </Segment>
);
