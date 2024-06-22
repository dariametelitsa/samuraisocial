import { TextInput } from "../textInput/TextInput.tsx";
import { ButtonWithIcon } from "../buttonWithIcon/ButtonWithIcon.tsx";
import { Style } from "./SendMessage.style.ts";

type SendMessageProps = {
    placeholder: string
    buttonTitle: string
    iconId?: string
    sendMessage: () => void
    multiline?: boolean
};
export const SendMessage = ({placeholder, buttonTitle, iconId, sendMessage, multiline}: SendMessageProps) => {
    return (
        <Style.SendMessage>
            <TextInput placeholder={placeholder} multiline={multiline}/>
            <ButtonWithIcon title={buttonTitle} iconId={iconId} onClick={sendMessage}/>
        </Style.SendMessage>
    );
};