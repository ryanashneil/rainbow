import { Button } from "@chakra-ui/core";
import Page from "components/Layout/AppPage";
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
        <Page title="Login" subtitle="Please sign in to continue">
            <Field.Input form={form} id={USERNAME} />
            <Button onClick={handleLogin} variantColor="teal">
                Login
            </Button>
        </Page>
    );
};
