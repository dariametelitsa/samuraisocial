import { SendMessage } from "../sendMessage/SendMessage.tsx";
import { Style } from "./Search.style.ts";

type SearchProps = {

};
export const Search = ({}: SearchProps) => {
    return (
        <Style.Search>
            <h3>Поиск друзей</h3>
            <SendMessage placeholder={'Найти...'} buttonTitle={'Отправить'} iconId={''} sendMessage={()=>{}}/>
        </Style.Search>
    );
};