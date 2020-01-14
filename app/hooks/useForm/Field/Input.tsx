import React from 'react';

import { IFormFunctions } from 'hooks/useForm/interfaces';
import { FormControl, FormLabel, Input, Textarea, Box } from '@chakra-ui/core';

interface IFieldInputProps {
    id: string;
    form: IFormFunctions;
}

const FieldInput = (props: IFieldInputProps): JSX.Element => {
    const { id, form } = props;
    const field = form.getField(id);

    if (!field) {
        return <div></div>;
    }

    const FieldElement = field.type === 'textarea' ? Textarea : Input;

    const onBlurHandler = (): void => {
        form.validateValue(id);
    };

    const onChangeHandler = (event: any): void => {
        form.updateValue(id, event.target.value);
    };

    return (
        <FormControl isInvalid={!!field.error} marginBottom='24px'>
            <FormLabel htmlFor={id}>{field.name}</FormLabel>
            <FieldElement
                id={id}
                type={field.type === 'textarea' ? 'text' : field.type}
                aria-describedby={field.name}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
            />
        </FormControl>
    );
}

export default FieldInput;