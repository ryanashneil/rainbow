import { getAllProfiles } from "src/db/api";
import { getSession } from "src/utils/session";
import Profile from "src/components/Card/Profile";
import List from "src/components/Layout/List";
import Page from "src/components/Layout/AppPage";

export default () => (
    <Page title="Profiles">
        <List
            getItems={() => getAllProfiles(getSession())}
            buildEachItem={user => (
                <Profile
                    key={user.key}
                    name={user.name}
                    age={user.age}
                    id={user.key}
                />
            )}
        />
    </Page>
);
