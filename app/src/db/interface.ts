export interface IObject<T> {
    [key: string]: T;
}

export interface IPerson {
    name: string;
    age: number;
    info: { [key: string]: string };
    image?: string;
}

export interface IProfile extends IPerson {
    key: string;
}
