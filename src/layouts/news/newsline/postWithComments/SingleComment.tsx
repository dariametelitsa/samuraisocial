import { CommentType } from "../../../../data/types.ts";
import { Style } from "./PostWithComments.style.ts";
import { UserElement } from "../../../../components/userElement/UserElement.tsx";

type SingleCommentProps = {
    comment: CommentType
};
export const SingleComment = ({comment}: SingleCommentProps) => {
    return (
        <Style.SingleComment>
            <UserElement id={comment.author.id} name={comment.author.name} smallText={comment.date}/>
            <Style.Text>{comment.text}</Style.Text>
        </Style.SingleComment>
    );
};