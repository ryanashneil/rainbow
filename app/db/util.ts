import firebase from "./config";

export const db = (ref?: string): firebase.database.Reference => {
    return firebase.database().ref(ref);
};

export const getAll = async <T>(ref: string): Promise<T[]> => {
    const data = await firebase
        .database()
        .ref(ref)
        .once("value");
    const arr = [];
    for (const key in data.val()) {
        arr.push({ key, ...data.val()[key] });
    }
    return arr as T[];
};
