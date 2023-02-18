import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.usersData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>);

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