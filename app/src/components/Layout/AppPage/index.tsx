import React from "react";
import Navbar, { INavbar } from "src/components/Navbar";
import Segment from "src/components/Layout/Segment";
import SessionHeader from "src/components/Navbar/SessionHeader";

// eslint-disable-next-line prettier/prettier
interface IAppPage extends React.Props<{}>, INavbar { }

export default (props: IAppPage) => (
    <>
        <SessionHeader />
        <Navbar {...props} />
        <Segment marginTop="40px">{props.children}</Segment>
    </>
);
