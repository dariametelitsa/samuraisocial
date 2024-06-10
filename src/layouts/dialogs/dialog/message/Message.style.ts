import styled from "styled-components";
import { theme } from "../../../../components/styles/Theme.ts";
import { flexWrapper } from "../../../../components/styles/common.ts";

const Message = styled.div<{fromMe: boolean}>`
    width: 100%;
    max-width: 70%;
    margin: 20px;
    ${props => props.fromMe ?  flexWrapper({gap: '16px'}) : flexWrapper({gap: '16px', direction: "row-reverse"})};
    align-self: ${props => props.fromMe ? 'start' : 'end' };
    
    & $(SvgIcon) {
        flex-grow: 1;
    }
`;

const Photo = styled.img `
    width: 46px;
    height: 46px;
`;

const TextField = styled.div <{fromMe: boolean}>`
    padding: 12px;
    background-color: ${props => props.fromMe ? theme.colors.accent : theme.colors.grey.light };
    border-radius: 10px;
    border: 1px solid ${theme.colors.accent};
`;

export const Style = {
    Message,
    Photo,
    TextField,
}