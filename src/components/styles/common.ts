import { theme } from "./Theme.ts";

type FontProps = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontProps) => `
    font-family: ${family || '"Open Sans", sans-serif'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    lineHeight: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px) / (1366 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;

