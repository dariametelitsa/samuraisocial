import styled from "styled-components";
import { theme } from "../../../../components/styles/Theme.ts";

const PostWithComments = styled.div `
    padding: 10px;
    width: 100%;
    border: 1px solid ${theme.colors.grey.dark};
    border-radius: 10px;
`;

const SinglePost = styled.div `
    display: grid;
    grid-template-columns: 1fr 50px;
    padding: 10px;
`;

const Likes = styled.span `
`;

const Text = styled.p `
    padding: 10px;
    grid-column: span 2;
`;

const CommentsList = styled.ul `
    margin-top: 20px;
`;

const SingleComment = styled.li `
    background-color: ${theme.colors.grey.light};
    padding: 10px;
`;

export const Style = {
    PostWithComments,
    SinglePost,
    Likes,
    Text,
    CommentsList,
    SingleComment,
}