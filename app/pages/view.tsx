import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProfile } from "src/db/api";
import { IPerson } from "src/db/interface";
import AppPage from "src/components/Layout/AppPage";
import Accordion from "src/components/Accordion";
import { Flex, Avatar } from "@chakra-ui/core";
import SpinnerCenter from "src/components/Spinner/SpinnerCenter";
import Navbar from "src/components/Navbar";
import Segment from "src/components/Layout/Segment";

export default () => {
    const [profile, setProfile] = useState<IPerson | undefined>(undefined);
    const { id: profileId, ref: userId } = useRouter().query;
    useEffect(() => void fetchProfile(), [profileId]);

    const fetchProfile = async () => {
        setProfile(await getProfile(userId as string, profileId as string));
    };

    if (!profile) {
        return (
            <AppPage>
                <SpinnerCenter />
            </AppPage>
        );
    }

    return (
        <>
            <Navbar
                title={profile.name}
                subtitle={`${profile.age} years old`}
            />
            <Segment marginTop="40px" marginBottom="40px">
                <Flex
                    width="100%"
                    alignItems="center"
                    direction="column"
                    marginBottom="40px"
                >
                    <Avatar
                        name={profile.name}
                        src={profile.image}
                        size={"2xl"}
                        marginBottom={16}
                    />
                </Flex>
                <Accordion
                    items={profile.info}
                    emptyState={[
                        "No Info specified!",
                        "/images/empty_info.png"
                    ]}
                />
            </Segment>
        </>
    );
};
