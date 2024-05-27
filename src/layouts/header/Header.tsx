import logo from './../../assets/logotype.svg';
import { Style } from './Header.style.ts';
import { UserElement } from "../../components/userElement/UserElement.tsx";
import { SvgIcon } from "../../components/SvgIcon.tsx";

export const Header = () => {
    return (
        <Style.Header>
            <img src={logo} alt="logotype"/>
            <nav>
                <ul>
                    <li><a href={'/'}><SvgIcon iconId={'news'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'message'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'notification'}/></a></li>
                </ul>
                <div>
                    <UserElement />
                </div>
            </nav>
        </Style.Header>
    );
};