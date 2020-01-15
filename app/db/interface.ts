export interface IPersonObject {
    [key: string]: IPerson;
}
export interface IPerson {
    name: string;
    age: number;
}

export interface IProfile extends IPerson {
    key: string;
}
