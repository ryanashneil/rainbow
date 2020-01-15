import firebase from "./config";

export const db = (ref?: string): firebase.database.Reference => {
    return firebase.database().ref(ref);
};

export const getObj = async <T>(ref: string): Promise<T> => {
    const data = await firebase
        .database()
        .ref(ref)
        .once("value");
    return data.val();
};

export const listifyObj = <T, V extends T>(obj: { [key: string]: T }) => {
    const arr = [];
    for (const key in obj) {
        arr.push({ key, ...obj[key] });
    }
    return arr as V[];
};
