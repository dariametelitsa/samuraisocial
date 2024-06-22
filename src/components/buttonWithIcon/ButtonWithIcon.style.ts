import styled from "styled-components";
import { theme } from "../styles/Theme.ts";
import { flexWrapper } from "../styles/common.ts";

const Button = styled.button `
    ${flexWrapper({gap: '6px'})}
    padding: 4px 10px;
    border-radius: 6px;
    border: 2px solid ${theme.colors.accent};
    
    &:hover {
        background-color: ${theme.colors.accent};
    }
`;

export const Style = {
    Button
}