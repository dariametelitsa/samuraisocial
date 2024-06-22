import { TextInput } from "../textInput/TextInput.tsx";
import { ButtonWithIcon } from "../buttonWithIcon/ButtonWithIcon.tsx";
import { Style } from "./SendMessage.style.ts";

type SendMessageProps = {
    placeholder: string
    buttonTitle: string
    iconId: string
    sendMessage: () => void
};
export const SendMessage = ({placeholder, buttonTitle, iconId, sendMessage}: SendMessageProps) => {
    return (
        <Style.SendMessage>
            <TextInput placeholder={placeholder}/>
            <ButtonWithIcon title={buttonTitle} iconId={iconId} onClick={sendMessage}/>
        </Style.SendMessage>
    );
};