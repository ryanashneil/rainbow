import { Button } from "@chakra-ui/core";
import Navbar from "components/Navbar";
import Segment from "components/Segment";
import Router from "next/router";
import { IFormSchema, useForm, Field } from "hooks/useForm";
import { isLoggedIn } from "utils/session";

const USERNAME = "username";

const loginSchema: IFormSchema = {
    [USERNAME]: {
        type: "text",
        name: "Username",
        placeholder: "Input your username"
    }
};

export default () => {
    const form = useForm(loginSchema);
    const handleLogin = () => {
        localStorage.setItem("userId", form.getValue(USERNAME));
        Router.push("/user");
    };
    if (isLoggedIn()) {
        return Router.push("/user");
    }
    return (
        <>
            <Navbar title="Login" subtitle="Please sign in to continue" />
            <Segment marginTop="40px">
                <Field.Input form={form} id={USERNAME} />
                <Button
                    marginTop={6}
                    onClick={handleLogin}
                    float="right"
                    variantColor="teal"
                >
                    Login
                </Button>
            </Segment>
        </>
    );
};
