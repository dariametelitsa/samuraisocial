import avatar from './../../assets/avatars/avatar4.jpg';

export const UserElement = () => {
    return (
        <div>
            <img src={avatar} alt={"User's photo"}/>
            <p>
                <span>Настя Барашкова</span>
                <span>@id234567890</span>
            </p>
        </div>
    );
};