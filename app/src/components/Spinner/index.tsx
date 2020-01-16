import { Flex, Spinner } from "@chakra-ui/core";

interface ISpinner {
    margin?: string;
}

export default (props: ISpinner) => {
    return (
        <Flex justifyContent="center" margin={props.margin || "0"}>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Flex>
    );
};
