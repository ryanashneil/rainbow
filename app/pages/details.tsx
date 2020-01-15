import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "src/utils/session";
import { getProfile } from "src/db/api";
import { IPerson } from "src/db/interface";
import AppPage from "src/components/Layout/AppPage";
import Accordion from "src/components/Accordion";
import { Spinner } from "@chakra-ui/core";

export default () => {
    const [profile, setProfile] = useState<IPerson | undefined>(undefined);
    const { id: profileId } = useRouter().query;
    useEffect(() => void mount(), [profileId]);

    const mount = async () => {
        const userId = getSession();
        setProfile(await getProfile(userId, profileId as string));
    };

    if (!profile) {
        return <Spinner />;
    }

    return (
        <AppPage title={profile.name} subtitle={"24 years old"}>
            <Accordion
                items={profile.info}
                emptyState={["No Info specified!", "/images/empty_info.png"]}
            />
        </AppPage>
    );
};
