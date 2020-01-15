import { db, get, list } from "./util";
import { IPerson, IObject, IProfile } from "./interface";

export const addProfile = async (userId: string, newPerson: any) => {
    await db(`/${userId}`).push(newPerson);
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
