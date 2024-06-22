import { SvgIcon } from "../SvgIcon.tsx";
import { Style } from "./ButtonWithIcon.style.ts";

type ButtonWithIconProps = {
    title: string
    iconId?: string
    onClick: () => void
};
export const ButtonWithIcon = ({title, iconId, onClick}: ButtonWithIconProps) => {
    return (
        <Style.Button onClick={onClick}>
            {title}
            {iconId && <SvgIcon iconId={iconId}/>}
        </Style.Button>
    );
};