import styled from "styled-components";
import { flexWrapper } from "../styles/common.ts";

const SendMessage = styled.form `
    ${flexWrapper({gap: '10px', align: 'stretch', wrap: 'wrap', justify: 'stretch'})};
    width: 100%;
    padding: 10px 0;
    & input {
        flex-grow: 1;
    }
`;

export const Style = {
    SendMessage
}