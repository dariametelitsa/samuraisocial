import { SvgIcon } from "../SvgIcon.tsx";
import { useState } from "react";
import { dropDownLinksType } from "../../data/types.ts";
import { Style } from "./DropDownMenu.style.ts";

type DropDownMenuProps = {
    menuItems: dropDownLinksType[]
};
export const DropDownMenu = ({menuItems}: DropDownMenuProps) => {

    const [open, isOpen] = useState(false);

    const onClickHandler = () => {
        isOpen(prev => !prev);
    }

    return (
        <Style.DropDownMenu>
            <button onClick={onClickHandler}>
                <SvgIcon iconId={'arrowDown'}></SvgIcon>
            </button>
            {open && <Style.DropMenu>
                {
                    menuItems.map((item, index) => {
                        return (
                            <Style.MenuItem key={index}>
                                <a href={item.href}>{item.title}</a>
                                {/*//todo navlink*/}
                            </Style.MenuItem>)
                    })
                }
            </Style.DropMenu>}
        </Style.DropDownMenu>
    );
};