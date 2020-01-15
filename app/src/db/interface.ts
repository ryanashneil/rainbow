export interface IObject<T> {
    [key: string]: T;
}

export interface IPerson {
    name: string;
    age: number;
    info: { [key: string]: string };
}

export interface IProfile extends IPerson {
    key: string;
}
