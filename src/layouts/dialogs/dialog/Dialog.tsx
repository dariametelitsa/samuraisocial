import { UserElement } from "../../../components/userElement/UserElement.tsx";
import { messages, personsForDialogs } from "../../../data/data.ts";
import { StyleLayout } from "../../layoutStyles.ts";
import { Message } from "./message/Message.tsx";
import avatar from './../../../assets/avatars/avatar4.jpg';
import { SendMessage } from "../../../components/sendMessage/SendMessage.tsx";


export const Dialog = () => {
    const user = personsForDialogs[0];
    const myId = personsForDialogs[0].id;

    return (
        <StyleLayout.MainBlock>
            <header>
                <UserElement id={user.id} name={user.name} smallText={user.smallText}/>
            </header>
            {messages.map(message => {
                const fromMe = myId === message.authorId;
                return (
                    <Message key={message.id}
                             avatar={avatar}
                             text={message.text}
                             date={message.time}
                             like={message.isLiked}
                             fromMe={fromMe}/>
                )
            })}
            <SendMessage placeholder={'Введи сообщение'} buttonTitle={"Отправить"} iconId={'send'} sendMessage={() => {}}/>
        </StyleLayout.MainBlock>
    );
};