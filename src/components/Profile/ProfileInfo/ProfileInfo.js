import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src='https://cs13.pikabu.ru/avatars/3194/x3194670-1190804622.png'/>
                </div>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;