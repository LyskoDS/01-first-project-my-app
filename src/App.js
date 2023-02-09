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
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className='content'>Main content</div>
        </div>);
}

export default App;
