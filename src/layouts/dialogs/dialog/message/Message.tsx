import { SvgIcon } from "../../../../components/SvgIcon.tsx";

type MessageProps = {
    avatar: string
    text: string
    date: string
    like?: boolean
    fromMe: boolean
};

export const Message = ({avatar, text, date, like, fromMe}: MessageProps) => {
    return (
        <div>
            <img src={avatar} alt={'Photo of profile'} />
            <p>{text}</p>
            <time>{date}</time>
            {like && <SvgIcon iconId={'news'}/>}
            {fromMe}
        </div>
    );
};