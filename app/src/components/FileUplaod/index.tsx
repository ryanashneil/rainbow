import { Button } from "@chakra-ui/core";

export default () => {
    return (
        <>
            <input accept="image/*" id="contained-button-file" type="file" />
            <label htmlFor="contained-button-file">
                <Button variant="outline" color="primary">
                    Upload
                </Button>
            </label>
        </>
    );
};
