import { db, getObj, listifyObj } from "./util";
import { IPerson, IPersonObject, IProfile } from "./interface";

export const addProfile = async (userId: string, newPerson: any) => {
    await db(`/${userId}`).push(newPerson);
};

export const getAllProfiles = async (userId: string): Promise<IProfile[]> => {
    const dataObj = await getObj<IPersonObject>(`/${userId}`);
    return listifyObj(dataObj) as IProfile[];
};

export const getProfile = async (
    userId: string,
    profileId: string
): Promise<IPerson> => {
    return await getObj<IPerson>(`/${userId}/${profileId}`);
};
