import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let usersData = [
        {id: 1, name: "Ksenia"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Irina"},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your?'},
        {id: 3, message: 'I love you'}
    ]

    let dialogsElements = usersData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;