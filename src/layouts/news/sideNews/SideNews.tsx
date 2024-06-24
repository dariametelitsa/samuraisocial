import { StyleLayout } from "../../layoutStyles.ts";
import { Friends } from "./friends/Friends.tsx";
import { Search } from "../../../components/search/Search.tsx";


export const SideNews = () => {
    return (
        <StyleLayout.SideBlock>
            <Friends/>
            <Search/>
        </StyleLayout.SideBlock>
    );
};