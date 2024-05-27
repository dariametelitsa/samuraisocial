import { theme } from "./Theme.ts";

type FontProps = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin: number
    Fmax: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontProps) => `
    font-family: ${family || '"Open Sans", sans-serif'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px) / (1366 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;


type FlexWrapperProps = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}
export const flexWrapper = ({direction, justify, align, wrap, gap}: FlexWrapperProps) => `
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'space-between'};
    align-items: ${align || 'center'};
    flex-wrap: ${wrap || 'no-wrap'};
    gap: ${gap || '0'};
`;
