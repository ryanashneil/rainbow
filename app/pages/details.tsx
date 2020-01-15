import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "utils/session";
import { getProfile } from "db/api";
import { IPerson } from "db/interface";
import AppPage from "components/Layout/AppPage";

export default () => {
    const [profile, setProfile] = useState<IPerson | undefined>(undefined);
    const { id: profileId, mode } = useRouter().query;
    useEffect(() => void mount(), [profileId]);

    const mount = async () => {
        const userId = getSession();
        const profile = await getProfile(userId, profileId as string);
        if (profile) setProfile(profile);
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <AppPage
            title={profile ? profile.name : "loading"}
            subtitle={String(profile.age)}
        >
            {profile && profile.hobbies}
        </AppPage>
    );
};
