import {FC} from 'react';
import {TextInput} from '@gravity-ui/uikit';

interface FormInputProps {
    value: string;
    setValue: (value: string) => void;
    isValid: boolean;
    placeholder: string;
    name: string;
    type: string;
}

const FormInput: FC<FormInputProps> = ({value, setValue, isValid, placeholder, name, type}) => {
    return (
        <TextInput
            name={name}
            type={type}
            size="xl"
            placeholder={placeholder}
            autoComplete={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            errorMessage={!isValid ? 'Это поле обязательно для заполнения' : ''}
            validationState={!isValid ? 'invalid' : undefined}
        />
    );
};

export default FormInput;
