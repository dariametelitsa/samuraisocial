import styled from "styled-components";
import { theme } from "../styles/Theme.ts";

const DropDownMenu = styled.div `
    position: relative;
`;

const DropMenu = styled.ul `
    position: absolute;
    right: 0;
    max-width: 300px;
    width: max-content;
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.bgBlock};
`;

const MenuItem = styled.li `
    padding: 12px 24px;
    
    &:hover {
        background-color: ${theme.colors.accent};
    }
`;

export const Style = {
    DropDownMenu,
    DropMenu,
    MenuItem,
}