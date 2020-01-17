import Segment from "src/components/Layout/Segment";
import Navbar from "src/components/Navbar";
import SessionHeader from "src/components/Navbar/SessionHeader";
import { Box, Button } from "@chakra-ui/core";
import { Image } from "@chakra-ui/core";
import { useRouter } from "next/router";

export default () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/login.html");
    };

    return (
        <div>
            <SessionHeader />
            <Navbar />
            <Segment marginTop="40px" marginBottom="40px">
                <Image src={"/icons/180-nobg.png"} marginLeft={"-46px"} />
                <h1>Welcome to </h1>
                <h1>RainDex </h1>
                <br />
                <Box width={"80%"}>
                    <p>
                        <i>
                            Often, society focuses on what they cannot do rather
                            than what they can do.
                        </i>
                    </p>
                    <br />
                    <p>
                        <b>RainDex</b> is a one-stop platform for students of
                        Rainbow Centre and their caregivers to express and share
                        their stories, passions and abilities in order to
                        encourage the public to look beyond their disabilities
                    </p>
                </Box>
                <Button
                    onClick={handleLogin}
                    variantColor="teal"
                    marginTop={"24px"}
                >
                    Start
                </Button>
            </Segment>
        </div>
    );
};
