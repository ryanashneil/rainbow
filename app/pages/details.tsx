import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "utils/session";
import { getProfile } from "db/api";
import { IPerson } from "db/interface";
import AppPage from "components/Layout/AppPage";
import Accordion, { IAccordionItem } from "components/Accordion";
import { Spinner } from "@chakra-ui/core";

const arr: IAccordionItem[] = [
    { title: "What I like & know", content: "hello there" },
    { title: "What I can do", content: "hello there" },
    { title: "What people like about me", content: "hello there" },
    { title: "What I can do for others", content: "hello there" },
    { title: "What is important to me", content: "hello there" },
    { title: "How to best support me", content: "hello there" }
];

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
            <Accordion items={arr} />
        </AppPage>
    );
};
