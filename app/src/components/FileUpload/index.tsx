import { Button, Flex, Avatar } from "@chakra-ui/core";
import { ChangeEvent, useState } from "react";

interface IFileUpload {
    title: string;
    filledTitle?: string;
    id: string;
}

export default (props: IFileUpload) => {
    const [file, setFile] = useState<any>(undefined);
    const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <Flex width="100%" alignItems="center" direction="column">
            <Avatar size="xl" marginBottom="24px" src={file} />
            <Button>
                <label htmlFor={props.id}>
                    {props.filledTitle && file
                        ? props.filledTitle
                        : props.title}
                </label>
            </Button>
            <input
                id={props.id}
                accept="image/*"
                type="file"
                name="upload"
                onChange={onFileUpload}
                style={{ display: "none" }}
            />
        </Flex>
    );
};
