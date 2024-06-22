import styled from "styled-components";
import { flexWrapper } from "../../../../components/styles/common.ts";

const SendPost = styled.div `
    ${flexWrapper({align: 'start', gap: '20px'})};
    width: 100%;
`;

const Avatar = styled.img `
    margin-top: 10px;
    width: 46px;
    height: 46px;
`;

export const Style = {
    SendPost,
    Avatar,
}