import { useState, useEffect } from "react";
import { Spinner, Stack, Flex } from "@chakra-ui/core";

interface IList<T> {
    spacing?: number;
    emptyPlaceholder?: string;
    getItems: () => Promise<T[]>;
    buildEachItem: (item: T) => void;
}

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
        await setLoading(true);
        await setDataList(await props.getItems());
        await setLoading(false);
    };

    if (isLoading) {
        return <ListSpinner />;
    }

    if (!dataList.length) {
        return <h3>{props.emptyPlaceholder || "No results found"}</h3>;
    }

    return (
        <Stack spacing={props.spacing || "24px"}>
            {dataList.map(props.buildEachItem)}
        </Stack>
    );
};
