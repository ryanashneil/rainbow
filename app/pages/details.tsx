import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "src/utils/session";
import { getProfile } from "src/db/api";
import { IPerson } from "src/db/interface";
import AppPage from "src/components/Layout/AppPage";
import Accordion from "src/components/Accordion";
import AddInfoModal from "src/components/Template/AddInfoModal";
import QRCodeModal from "src/components/Template/QRCodeModal";
import { Flex, Avatar } from "@chakra-ui/core";
import SpinnerCenter from "src/components/Spinner/SpinnerCenter";

export default () => {
    const [profile, setProfile] = useState<IPerson | undefined>(undefined);
    const { id: profileId } = useRouter().query;
    useEffect(() => void fetchProfile(), [profileId]);

    const fetchProfile = async () => {
        const userId = getSession();
        setProfile(await getProfile(userId, profileId as string));
    };

    if (!profile) {
        return (
            <AppPage>
                <SpinnerCenter />
            </AppPage>
        );
    }

    return (
        <AppPage title={profile.name} subtitle={"24 years old"} hasBackButton>
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
                <QRCodeModal name={profile.name} />
            </Flex>
            <Accordion
                items={profile.info}
                emptyState={["No Info specified!", "/images/empty_info.png"]}
            />
            <AddInfoModal id={profileId as string} onSubmit={fetchProfile} />
        </AppPage>
    );
};
