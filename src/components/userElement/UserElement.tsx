import avatar from './../../assets/avatars/avatar4.jpg';
import { Style } from './UserElement.style';
import { NotificationDot } from "../NotificationDot.style.ts";
import { PersonsDialogType } from "../../data/types.ts";

// todo avatar
export const UserElement = ({name, smallText, isOnline}: PersonsDialogType) => {
    return (
        <Style.UserBlock>
            <Style.AvatarWrapper>
                <Style.Avatar src={avatar} alt={"User's photo"}/>
                {isOnline && <NotificationDot/>}
            </Style.AvatarWrapper>

            <Style.TextInfo>
                <Style.Name>{name}</Style.Name>
                <Style.Small>{smallText}</Style.Small>
            </Style.TextInfo>
        </Style.UserBlock>
    );
};