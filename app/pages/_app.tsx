import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Theme from "styles/global";
import Head from "next/head";

export default ({ Component, pageProps }) => (
    <ThemeProvider>
        <Head>
            <title>Passport</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <CSSReset />
        <Theme />
        <Component {...pageProps} />
    </ThemeProvider>
);
