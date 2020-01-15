import Navbar from "components/Navbar";
import Segment from "components/Segment";
import { useEffect, useState } from "react";
import { getAllProfiles } from "db/api";
import { getSession } from "utils/session";
import Profile from "components/Card/Profile";

export default () => {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => void mount(), []);

    const mount = async () => {
        const id = getSession();
        setProfiles(await getAllProfiles(id));
    };

    return (
        <div>
            <Navbar title="Profiles" />
            <Segment>
                {profiles.map(profile => (
                    <Profile
                        key={profile.name}
                        name={profile.name}
                        age={12}
                        id={profile.key}
                    />
                ))}
            </Segment>
        </div>
    );
};
