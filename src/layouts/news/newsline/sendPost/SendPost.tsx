import { Style } from "./SendPost.style.ts";
import { SendMessage } from "../../../../components/sendMessage/SendMessage.tsx";

type SendPostProps = {
    avatar: string
};
export const SendPost = ({avatar}: SendPostProps) => {
    return (
        <Style.SendPost>
            <Style.Avatar src={avatar} />
            <SendMessage
                placeholder={"Поделитесь впечатлениями здесь... (максимум 280 символов)"}
                buttonTitle={'Отправить'}
                iconId={'send'}
                sendMessage={()=> {}}/>
        </Style.SendPost>
    );
};