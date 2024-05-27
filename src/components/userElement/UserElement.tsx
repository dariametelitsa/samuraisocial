import avatar from './../../assets/avatars/avatar4.jpg';
import { style } from './UserElement.style';

export const UserElement = () => {
    return (
        <style.UserBlock>
            <style.Avatar src={avatar} alt={"User's photo"}/>
            <style.TextInfo>
                <style.Name>Настя Барашкова</style.Name>
                <style.Small>@id234567890</style.Small>
            </style.TextInfo>
        </style.UserBlock>
    );
};