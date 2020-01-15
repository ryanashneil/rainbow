import React from "react";
import Navbar, { INavbar } from "components/Navbar";
import Segment from "components/Segment";
import SessionHeader from "components/Navbar/SessionHeader";

// eslint-disable-next-line prettier/prettier
interface IAppPage extends React.Props<{}>, INavbar { }

export default (props: IAppPage) => (
    <>
        <SessionHeader />
        <Navbar title={props.title} subtitle={props.subtitle} />
        <Segment marginTop="40px">{props.children}</Segment>
    </>
);
