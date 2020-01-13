import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export default ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}