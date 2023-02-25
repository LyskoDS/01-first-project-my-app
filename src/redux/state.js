const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12},
                {id: 2, post: "It's my first post", likesCount: 34},
                {id: 3, post: "OOOOOPS", likesCount: 534},
                {id: 4, post: "Hello, man", likesCount: 324},
                {id: 5, post: "Let's goooo!", likesCount: 3}
            ],
            newPostText: 'it-kamasutra'
        },
        messages: {
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

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                post: this._state.profile.newPostText,
                likesCount: 0
            };
            this._state.profile.postsData.push(newPost);
            this._state.profile.newPostText = ('');
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messages.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.messages.newMessageBody;
            this._state.messages.newMessageBody = '';
            this._state.messages.push({id: 4, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () =>
    ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;
window.store = store;