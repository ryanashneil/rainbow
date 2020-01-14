import firebase from ".";

export const addUser = async (userId: string, newPerson: any) => {
    const ref = `/${userId}`;
    await firebase
        .database()
        .ref(ref)
        .push(newPerson);
};

export const getAllUsers = async (userId: string) => {
    const ref = `/${userId}`;
    const users = [];
    const data = await firebase
        .database()
        .ref(ref)
        .once("value");
    for (const key in data.val()) {
        users.push(data.val()[key]);
    }
    return users;
};
