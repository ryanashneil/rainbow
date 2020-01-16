import React from "react";

import { IFormFunctions } from "src/hooks/useForm/interfaces";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormHelperText
} from "@chakra-ui/core";

interface IFieldInputProps {
    id: string;
    form: IFormFunctions;
    width?: string;
}

const FieldInput = (props: IFieldInputProps): JSX.Element => {
    const { id, form, width } = props;
    const field = form.getField(id);

    if (!field) {
        return <div></div>;
    }

    const FieldElement = field.type === "textarea" ? Textarea : Input;

    const onBlurHandler = (): void => {
        form.validateValue(id);
    };

    const onChangeHandler = (event: any): void => {
        form.updateValue(id, event.target.value);
    };

    return (
        <FormControl isInvalid={!!field.error} marginBottom="24px">
            <FormLabel fontWeight="medium" htmlFor={id}>
                {field.name}
            </FormLabel>
            <FieldElement
                marginTop="4px"
                id={id}
                type={field.type === "textarea" ? "text" : field.type}
                placeholder={field.placeholder}
                aria-describedby={field.name}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                width={width || "100%"}
            />
            {field.helpertext && (
                <FormHelperText id={`${id}-helper-text`}>
                    {field.helpertext}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default FieldInput;
