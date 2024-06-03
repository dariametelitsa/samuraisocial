import logo from './../../assets/logotype.svg';
import { Style } from './Header.style.ts';
import { UserElement } from "../../components/userElement/UserElement.tsx";
import { SvgIcon } from "../../components/SvgIcon.tsx";
import { DropDownMenu } from "../../components/dropDownMenu/DropDownMenu.tsx";
import { dropDownMenuItems } from "../../data/data.ts";

export const Header = () => {
    return (
        <Style.Header>
            <img src={logo} alt="logotype"/>
            <Style.Navigation>
                <Style.Menu>
                    {/*//todo navlink*/}
                    <li><a href={'/'}><SvgIcon iconId={'news'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'message'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'notification'}/></a></li>
                </Style.Menu>
                <Style.UserMenu>
                    <UserElement />
                    <DropDownMenu menuItems={dropDownMenuItems}/>
                </Style.UserMenu>
            </Style.Navigation>
        </Style.Header>
    );
};