import { db, get, list } from "./util";
import { IPerson, IObject, IProfile } from "./interface";
import firebase from "./config";

export const addProfile = async (
    userId: string,
    newPerson: any
): Promise<string> => {
    const result = await db(`/${userId}`).push(newPerson);
    return result.key;
};

export const updateProfileInfo = async (
    userId: string,
    profileId: string,
    newInfo: any
): Promise<void> => {
    await db(`/${userId}/${profileId}/info`).update(newInfo);
};

export const getAllProfiles = async (userId: string): Promise<IProfile[]> => {
    const dataObj = await get<IObject<IPerson>>(`/${userId}`);
    return list(dataObj) as IProfile[];
};

export const getProfile = async (
    userId: string,
    profileId: string
): Promise<IPerson> => {
    return await get<IPerson>(`/${userId}/${profileId}`);
};

export const uploadPhoto = async (id, file: any) => {
    const blob = new Blob([file], { type: "image/png" });

    return await firebase
        .storage()
        .ref(`/${id}/hello`)
        .put(blob);
};
