import styled from "styled-components";
import { theme } from "./styles/Theme.ts";

export const NotificationDot = styled.span `
    position: absolute;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${theme.colors.notifications};
`;