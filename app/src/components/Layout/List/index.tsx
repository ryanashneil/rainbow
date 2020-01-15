import { useState, useEffect } from "react";
import { Spinner, Flex } from "@chakra-ui/core";
import styled from "@emotion/styled";

interface IList<T> {
    spacing?: number;
    emptyPlaceholder?: string;
    getItems: () => Promise<T[]>;
    buildEachItem: (item: T) => void;
}

interface ISpace {
    marginBottom: number;
}

const ListWithSpace = styled.div`
    > * {
        margin-bottom: ${(props: ISpace) => `${props.marginBottom}px`};
    }
`;

const ListSpinner = () => (
    <Flex justifyContent="center" marginTop="24px">
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    </Flex>
);

export default <T extends {}>(props: IList<T>) => {
    const [dataList, setDataList] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => void fetchData(), []);

    const fetchData = async () => {
        setLoading(true);
        setDataList(await props.getItems());
        setLoading(false);
    };

    if (isLoading) {
        return <ListSpinner />;
    }

    if (!dataList.length) {
        return <h3>{props.emptyPlaceholder || "No results found"}</h3>;
    }

    return (
        <ListWithSpace marginBottom={props.spacing || 16}>
            {dataList.map(props.buildEachItem)}
        </ListWithSpace>
    );
};
