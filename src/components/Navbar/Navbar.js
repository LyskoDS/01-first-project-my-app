import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={classN => classN.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={classN => classN.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={classN => classN.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={classN => classN.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={classN => classN.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;