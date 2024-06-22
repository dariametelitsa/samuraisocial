import { Style } from "./Friends.style.ts";

type FriendProps = {
    name: string
    avatar: string
    link: string
};
export const FriendItem = ({name, avatar, link}: FriendProps) => {
    return (
        <Style.FriendItem href={link}>
            <Style.Avatar src={avatar}/>
            <span>{name}</span>
        </Style.FriendItem>
    );
};