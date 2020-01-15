import { getAllProfiles } from "src/db/api";
import { getSession } from "src/utils/session";
import Profile from "src/components/Card/Profile";
import List from "src/components/Layout/List";
import Page from "src/components/Layout/AppPage";
import NewPersonModal from "src/components/Template/NewPersonModal";

export default () => (
    <Page title="Profiles" RightElement={NewPersonModal}>
        <List
            getItems={() => getAllProfiles(getSession())}
            buildEachItem={({ key, name, age }) => (
                <Profile key={key} name={name} age={age} id={key} />
            )}
        />
    </Page>
);
