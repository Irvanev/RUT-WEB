import {FC} from 'react';
import {Radio} from '@gravity-ui/uikit';

interface FormRadioProps {
    value: string;
    content: string;
    setValue: (value: string) => void;
    checked: boolean;
}

const FormRadio: FC<FormRadioProps> = ({value, content, setValue, checked}) => {
    return (
        <>
            <Radio
                value={value}
                content={content}
                size="l"
                checked={checked}
                onChange={(event) => setValue(event.target.value)}
            />
        </>
    );
};

export default FormRadio;
