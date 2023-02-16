import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} className={classN => classN.isActive ? s.active : s.dialogsItems}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>
                <Dialog name='Ksenia' id='1'/>
                <Dialog name='Andrey' id='2'/>
                <Dialog name='Irina' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are your?'/>
                <Message message='I love you'/>
            </div>
        </div>
    )
}

export default Dialogs;