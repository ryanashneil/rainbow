import { Global, css } from "@emotion/core";

const globalStyles = css`
    body {
        margin: 0;
        padding: 0;
        background: white;
    }
    h1 {
        font-size: 32px;
        font-weight: 600;
        margin: 0;
    }
    h2 {
        font-size: 20px;
        font-weight: 400;
        margin: 0;
    }
`;

export default (): JSX.Element => <Global styles={globalStyles} />;
