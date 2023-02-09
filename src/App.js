import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/400px-Vanamo_Logo.svg.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                <img src='https://cdn1.ozone.ru/s3/multimedia-k/6445835468.jpg' />
                </div>
                <div>
                    ava + description
                <img src='https://cs13.pikabu.ru/avatars/3194/x3194670-1190804622.png'/>
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>);
}

export default App;
