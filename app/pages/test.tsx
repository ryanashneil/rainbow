import { getAllUsers } from "db/api";
import { getSession } from "utils/session";
import Profile from "components/Card/Profile";
import List from "components/Layout/List";
import Page from "components/Layout/AppPage";

export default () => (
    <Page title="Profiles">
        <List
            getItems={() => getAllUsers(getSession())}
            buildEachItem={user => <Profile name={user.name} age={user.age} />}
        />
    </Page>
);