import styled from "styled-components";
import { flexWrapper } from "../../../../components/styles/common.ts";
import { theme } from "../../../../components/styles/Theme.ts";

const Friends = styled.div `
    text-align: center;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        right: -20px;
        left: -20px;
        bottom: -40px;
        height: 20px;
        background-color: ${theme.colors.grey.light};
    }
`;

const FriendsList = styled.div `
    ${flexWrapper({wrap: 'wrap', gap: '40px'})};
    margin-top: 30px;
    margin-bottom: 50px;
`;

const FriendItem = styled.a `
    ${flexWrapper({direction: 'column'})};
`;

const Avatar = styled.img `
    width: 52px;
    height: 52px;
`;

export const Style = {
    Friends,
    FriendsList,
    FriendItem,
    Avatar
}