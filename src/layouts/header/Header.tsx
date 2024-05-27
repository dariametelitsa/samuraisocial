import logo from './../../assets/logotype.svg';
import { Style } from './Header.style.ts';
import { UserElement } from "../../components/userElement/UserElement.tsx";

export const Header = () => {
    return (
        <Style.Header>
            <img src={logo} alt="logotype"/>
            <nav>
                <ul>
                    <li><a href={'/'}>img 1</a></li>
                    <li><a href={'/'}>img 2</a></li>
                    <li><a href={'/'}>img 3</a></li>
                </ul>
                <div>
                    <UserElement />
                </div>
            </nav>
        </Style.Header>
    );
};