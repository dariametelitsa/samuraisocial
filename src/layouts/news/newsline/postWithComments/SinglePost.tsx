import { PersonsDialogType } from "../../../../data/types.ts";
import { Style } from "./PostWithComments.style.ts";
import { UserElement } from "../../../../components/userElement/UserElement.tsx";
import avatar from '../../../../assets/avatars/avatar4.jpg';
import { SvgIcon } from "../../../../components/SvgIcon.tsx";

type SinglePostProps = {
    person: PersonsDialogType
    postText: string
    likes: number
    date: string
};
export const SinglePost = ({person, postText, likes, date}: SinglePostProps) => {
    return (
        <Style.SinglePost>
            <UserElement id={person.id} name={person.name} smallText={date} avatar={avatar} isOnline={person.isOnline}/>
            <Style.Likes>
                {likes ? <SvgIcon iconId={'like'}/> : <SvgIcon iconId={'like'}/>}
                <span>{likes}</span>
            </Style.Likes>
            <Style.Text>{postText}</Style.Text>
        </Style.SinglePost>
    );
};