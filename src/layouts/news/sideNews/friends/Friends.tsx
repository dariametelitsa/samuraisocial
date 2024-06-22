import { Style } from "./Friends.style.ts";
import avatar from '../../../../assets/avatars/avatar4.jpg';
import { FriendItem } from "./Friend.tsx";

type FriendsProps = {
};
type friendsType = {
    avatar: string
    name: string
    link: string
}
const friends: friendsType[] = [
    {
        avatar: 'string',
        name: 'Феня Р.',
        link: '#1',
    },
    {
        avatar: 'string',
        name: 'Ганя И.',
        link: '#1',
    },
    {
        avatar: 'string',
        name: 'Аглая Е.',
        link: '#1',
    },
    {
        avatar: 'string',
        name: 'Лев М.',
        link: '#1',
    },
];

export const Friends = ({}: FriendsProps) => {
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