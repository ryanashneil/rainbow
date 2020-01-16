import { getAllProfiles } from "src/db/api";
import { getSession } from "src/utils/session";
import Profile from "src/components/Card/Profile";
import List from "src/components/List";
import Page from "src/components/Layout/AppPage";
import NewPersonModal from "src/components/Template/NewPersonModal";

export default () => (
    <Page title="Profiles" RightElement={NewPersonModal}>
        <List
            emptyState={["No profiles found!", "/images/empty_profiles.png"]}
            getItems={() => getAllProfiles(getSession())}
            buildEachItem={({ key, name, age, image }) => (
                <Profile
                    key={key}
                    name={name}
                    age={age}
                    id={key}
                    image={image}
                />
            )}
        />
    </Page>
);
