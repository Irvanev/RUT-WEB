import {Radio} from '@gravity-ui/uikit';

interface FormRadioProps<T> {
    value: T;
    content: string;
    setValue: (value: T) => void;
    checked: boolean;
}

const FormRadio = <T extends string>({value, content, setValue, checked}: FormRadioProps<T>) => {
    return (
        <>
            <Radio
                value={value}
                content={content}
                size="l"
                checked={checked}
                onChange={(event) => setValue(event.target.value as T)}
            />
        </>
    );
};

export default FormRadio;
