import { Button, Flex, Avatar } from "@chakra-ui/core";
import { ChangeEvent } from "react";

interface IFileUpload {
    title: string;
    filledTitle?: string;
    id: string;
    file: any;
    setFile: (e: any) => void;
}

export default (props: IFileUpload) => {
    const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files[0]);
        props.setFile(event.target.files[0]);
    };

    return (
        <Flex width="100%" alignItems="center" direction="column">
            <Avatar
                size="xl"
                marginBottom="24px"
                src={props.file ? URL.createObjectURL(props.file) : undefined}
            />
            <Button>
                <label htmlFor={props.id}>
                    {props.filledTitle && props.file
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
