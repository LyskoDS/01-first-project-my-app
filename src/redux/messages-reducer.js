const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    usersData: [
        {id: 1, name: "Ksenia"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Irina"},
        {id: 4, name: "Maxim"},
        {id: 5, name: "Anna"},
        {id: 6, name: "Vladimir"}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your?'},
        {id: 3, message: 'I love you'}
    ],
    newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 4, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () =>
    ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default messagesReducer;