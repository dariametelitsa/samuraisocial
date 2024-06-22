import { UserElement } from "../../../components/userElement/UserElement.tsx";
import { personsForDialogs } from "../../../data/data.ts";
import { StyleLayout } from "../../layoutStyles.ts";
import { v1 } from "uuid";
import { Message } from "./message/Message.tsx";
import avatar from './../../../assets/avatars/avatar4.jpg';
import { SendMessage } from "../../../components/sendMessage/SendMessage.tsx";

type messageType = {
    id: string
    authorId: string
    text: string
    isLiked: boolean
    time: string
}
const messages: messageType[] = [
    {
        id: v1(),
        authorId: v1(),
        text: 'Сдавливание, если принять во внимание воздействие фактора времени, качественно вымывает в ореховатый капилляр. Осушение вязко. Не ставя под сомнение возможность разных подходов к почве, ортзанд полидисперсен',
        isLiked: false,
        time: Date(),
    },
    {
        id: v1(),
        authorId: v1(),
        text: 'Органическое вещество вязко. Латерит неоднороден по составу. Подзолообразование, по данным почвенной съемки, перпендикулярно. К.К.Гедройцем было показано, что профиль концентрирует бур. Новообразование однократно. Осушение, если принять во внимание воздействие фактора времени, мгновенно эволюционирует в гистерезис ОГХ.',
        isLiked: false,
        time: Date(),
    },
    {
        id: v1(),
        authorId: personsForDialogs[0].id,
        text: 'В связи с этим нужно подчеркнуть, что чернозём химически переносит глей. Бурозём разрушаем. Лесополоса, в сочетании с традиционными агротехническими приемами, отталкивает уровень грунтовых вод.',
        isLiked: true,
        time: Date(),
    },
];
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
            <SendMessage placeholder={'Введи сообщение'} buttonTitle={"Отправить"} iconId={'news'} sendMessage={() => {}}/>
        </StyleLayout.MainBlock>
    );
};