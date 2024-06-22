import styled from "styled-components";
import { theme } from "../../components/styles/Theme.ts";
import { flexWrapper } from "../../components/styles/common.ts";

const DialogHeader = styled.header `
    background-color: ${theme.colors.grey.light};
`;

const DialogList = styled.ul `
    ${flexWrapper({direction: 'column', gap: '20px'})};
    margin-top: 30px;
`;

export const Style = {
    DialogHeader,
    DialogList,
}