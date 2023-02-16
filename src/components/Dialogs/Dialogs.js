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

    let dialogsData = [
        {id: 1, name: "Ksenia"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Irina"},
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your?'},
        {id: 3, message: 'I love you'}
    ]

    return (
        <div className={s.dialogs}>
            <div>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;