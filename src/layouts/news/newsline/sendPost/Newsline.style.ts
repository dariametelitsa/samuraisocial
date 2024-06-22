import styled from "styled-components";
import { flexWrapper } from "../../../../components/styles/common.ts";

const PostList = styled.div `
    ${flexWrapper({gap: '40px', direction: 'column', align: 'stretch'})};
    width: 100%;
`;

export const Style = {
    PostList
}