import { Style } from "./TextInput.style.ts";

type TextInputProps = {
    placeholder: string
};
export const TextInput = ({placeholder}: TextInputProps) => {
    return (
        <Style.Input type={"text"} placeholder={placeholder}/>
    );
};