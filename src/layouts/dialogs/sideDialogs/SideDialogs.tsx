import { PersonsDialogType } from "../../../data/types.ts";
import { UserElement } from "../../../components/userElement/UserElement.tsx";
import { StyleLayout } from "../../layoutStyles.ts";
import { Style } from "../dialogs.style.ts";
import { Link, Outlet } from "react-router-dom";

type SideDialogsProps = {
    persons: PersonsDialogType[]
};

export const SideDialogs = ({persons}: SideDialogsProps) => {
    return (
        <>
            <StyleLayout.SideBlock>
                <h2>Диалоги</h2>
                <Style.DialogList>
                    {persons.map(person => {
                        return (
                            <Link to={'currentdialog'}>
                                <li key={person.id}>
                                    <UserElement id={person.id} name={person.name} smallText={person.smallText}/>
                                </li>
                            </Link>
                        )
                    })}
                </Style.DialogList>
            </StyleLayout.SideBlock>
            <Outlet/>
        </>
    );
};