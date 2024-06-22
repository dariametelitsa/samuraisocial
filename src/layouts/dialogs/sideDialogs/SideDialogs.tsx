import { PersonsDialogType } from "../../../data/types.ts";
import { UserElement } from "../../../components/userElement/UserElement.tsx";
import { StyleLayout } from "../../layoutStyles.ts";
import { Style } from "../dialogs.style.ts";

type SideDialogsProps = {
    persons: PersonsDialogType[]
};

export const SideDialogs = ({persons}: SideDialogsProps) => {
    return (
        <StyleLayout.SideBlock>
            <h2>Диалоги</h2>
            <Style.DialogList>
                {persons.map(person => {
                    return (
                        <a href={'#1'}>
                            <li key={person.id}>
                                <UserElement id={person.id} name={person.name} smallText={person.smallText}/>
                            </li>
                        </a>
                    )
                })}
            </Style.DialogList>
        </StyleLayout.SideBlock>
    );
};