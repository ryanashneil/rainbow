import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "utils/session";
import { getProfile } from "db/api";
import { IPerson } from "db/interface";
import AppPage from "components/Layout/AppPage";
import Accordion from "components/Accordion";
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

    console.log(profile);

    return (
        <AppPage title={profile.name} subtitle={"24 years old"}>
            <Accordion items={profile.info} />
        </AppPage>
    );
};
