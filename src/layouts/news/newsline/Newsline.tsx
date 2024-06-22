import { StyleLayout } from "../../layoutStyles.ts";
import { SendPost } from "./sendPost/SendPost.tsx";
import avatar from '../../../assets/avatars/avatar4.jpg';
import { PostWithComments } from "./postWithComments/PostWithComments.tsx";
import { posts } from "../../../data/data.ts";
import { Style } from "./sendPost/Newsline.style.ts";


export const Newsline = () => {
    return (
        <StyleLayout.MainBlock>
            <SendPost avatar={avatar}/>
            <Style.PostList>
            {
                posts.map(post => {
                    return <PostWithComments
                        date={post.date}
                        comments={post.comments}
                        postText={post.postText}
                        person={post.person}
                        likes={post.likes}
                    />
                })
            }
            </Style.PostList>

        </StyleLayout.MainBlock>
    );
};