import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, post: 'Hi, how are you?', likesCount: 12},
    {id: 2, post: "It's my first post", likesCount: 34}
]

let usersData = [
    {id: 1, name: "Ksenia"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Irina"},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are your?'},
    {id: 3, message: 'I love you'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} usersData={usersData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
