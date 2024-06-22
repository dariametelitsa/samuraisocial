import { StyleLayout } from "../../layoutStyles.ts";
import { Friends } from "./friends/Friends.tsx";
import { Search } from "../../../components/search/Search.tsx";

type SideNewsProps = {

};
export const SideNews = ({}: SideNewsProps) => {
    return (
        <StyleLayout.SideBlock>
            <Friends/>
            <Search/>
        </StyleLayout.SideBlock>
    );
};