import Navbar from "components/Navbar";
import Segment from "components/Segment";
import { useEffect, useState } from "react";
import { getAllUsers } from "db/api";
import { getSession } from "utils/session";
import Profile from "components/Card/Profile";

export default () => {
    const [users, setUsers] = useState([]);
    useEffect(() => void mount(), []);

    const mount = async () => {
        const id = getSession();
        setUsers(await getAllUsers(id));
    };

    return (
        <div>
            <Navbar title="Profiles" />
            <Segment>
                {users.map(user => (
                    <Profile key={user.name} name={user.name} age={12} />
                ))}
            </Segment>
        </div>
    );
};
