import firebase from ".";

export const addUser = async (userId: string, newPerson: any) => {
  const ref = `/${userId}`;
  firebase
    .database()
    .ref(ref)
    .push(newPerson);
};
