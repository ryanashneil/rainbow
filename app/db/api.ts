import { db, getAll } from "./util";
import { IPerson } from "./interface";

export const addUser = async (userId: string, newPerson: any) => {
    await db(`/${userId}`).push(newPerson);
};

export const getAllUsers = async (userId: string): Promise<IPerson[]> => {
    return await getAll(`/${userId}`);
};
