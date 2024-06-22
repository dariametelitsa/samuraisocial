import { Style } from "./TextInput.style.ts";

type TextInputProps = {
    placeholder: string
    multiline?: boolean
};
export const TextInput = ({placeholder, multiline}: TextInputProps) => {
    return (
        multiline
            ? <Style.Textarea placeholder={placeholder} rows={4}/>
            : <Style.Input type={"text"} placeholder={placeholder}/>
    )
};