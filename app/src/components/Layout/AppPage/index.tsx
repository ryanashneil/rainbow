import React from "react";
import Navbar, { INavbar } from "src/components/Navbar";
import Segment from "src/components/Layout/Segment";
import SessionHeader, {
    ISessionHeader
} from "src/components/Navbar/SessionHeader";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/core";

interface IAppPage extends React.Props<{}>, INavbar, ISessionHeader {
    hasBackButton?: boolean;
}

export default (props: IAppPage) => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    const renderBackButton = (
        <Button variant="unstyled" color="white" size="xs" onClick={goBack}>
            Back
        </Button>
    );

    return (
        <>
            <SessionHeader
                backButton={props.hasBackButton && renderBackButton}
            />
            <Navbar {...props} />
            <Segment marginTop="40px" marginBottom="40px">
                {props.children}
            </Segment>
        </>
    );
};
