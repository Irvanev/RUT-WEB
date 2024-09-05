import {FC} from 'react';
import {TextArea} from '@gravity-ui/uikit';

interface FormTextAreaProps {
    value: string;
    setValue: (value: string) => void;
    isValid: boolean;
    placeholder: string;
    name: string;
}

const FormTextArea: FC<FormTextAreaProps> = ({value, setValue, isValid, placeholder, name}) => {
    return (
        <TextArea
            name={name}
            size="xl"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            errorMessage={!isValid ? 'Это поле обязательно для заполнения' : ''}
            validationState={!isValid ? 'invalid' : undefined}
        />
    );
};

export default FormTextArea;
