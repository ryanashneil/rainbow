import { IConstraint } from "./validation";

export interface IFormFunctions {
    getField: (id: string) => IFormField;
    getValue: (id: string) => any;
    updateValue: (id: string, value: any) => void;
    validateValue: (id: string) => void;
    validateFormForSubmission: () => Promise<boolean>;
}

export interface IFormSchema {
    [id: string]: IBasicValueFormField;
}

export interface IFormFieldHashMap {
    [id: string]: IFormField;
}

export type TFieldType = "text" | "number" | "email" | "phone" | "textarea";

interface IBasicFormProperties {
    constraints?: IConstraint[];
    disableValidation?: boolean;
}

interface IFormProperties {
    id: string;
    value: any;
    error?: string;
}

export interface IBasicValueFormField extends IBasicFormProperties {
    type: TFieldType;
    name: string;
    placeholder?: string;
}

export interface IFormField extends IBasicValueFormField, IFormProperties {}
