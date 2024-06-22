import { PostType } from "../../../../data/types.ts";
import { SinglePost } from "./SinglePost.tsx";
import { SingleComment } from "./SingleComment.tsx";
import { Style } from "./PostWithComments.style.ts";
import { SendMessage } from "../../../../components/sendMessage/SendMessage.tsx";

export const PostWithComments = ({person, postText, likes, date, comments}: PostType) => {
    return (
        <Style.PostWithComments>
            <SinglePost person={person} postText={postText} likes={likes} date={date}/>
            <Style.CommentsList>
                {
                    comments.map(comment => {
                        return <SingleComment comment={comment}/>
                    })
                }
            </Style.CommentsList>
            <SendMessage placeholder={'Оставить комментарий'} buttonTitle={'Отправить'} iconId={'news'} sendMessage={() => {}}/>
        </Style.PostWithComments>
    );
};