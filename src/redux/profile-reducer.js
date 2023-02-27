const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: "It's my first post", likesCount: 34},
        {id: 3, post: "OOOOOPS", likesCount: 534},
        {id: 4, post: "Hello, man", likesCount: 324},
        {id: 5, post: "Let's goooo!", likesCount: 3}
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                post: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = ('');
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;