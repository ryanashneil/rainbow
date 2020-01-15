import { getAllProfiles } from "db/api";
import { getSession } from "utils/session";
import Profile from "components/Card/Profile";
import List from "components/Layout/List";
import Page from "components/Layout/AppPage";

export default () => (
    <Page title="Profiles">
        <List
            getItems={() => getAllProfiles(getSession())}
            buildEachItem={user => (
                <Profile name={user.name} age={user.age} id={user.key} />
            )}
        />
    </Page>
);
