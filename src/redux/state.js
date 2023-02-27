import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar: {}

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

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;