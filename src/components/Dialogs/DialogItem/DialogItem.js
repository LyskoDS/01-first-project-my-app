import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://kartinkin.net/pics/uploads/posts/2022-08/1660407500_2-kartinkin-net-p-chisto-chernie-oboi-na-telefon-krasivo-2.jpg'/>
                <NavLink to={path}
                         className={classN => classN.isActive ? s.active : s.dialogsItems}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;