import { Style } from "./Friends.style.ts";
import avatar from '../../../../assets/avatars/avatar4.jpg';
import { FriendItem } from "./Friend.tsx";
import { friends } from "../../../../data/data.ts";


export const Friends = () => {
    return (
        <Style.Friends>
            <h3>Друзья</h3>
            <Style.FriendsList>
                {friends.map(fr => {
                    return (
                        <FriendItem name={fr.name} avatar={avatar} link={fr.link}/>
                    )
                })}
            </Style.FriendsList>
        </Style.Friends>
    );
};