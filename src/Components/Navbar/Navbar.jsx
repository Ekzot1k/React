import { NavLink } from 'react-router-dom';
import navbarModule from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={navbarModule.navbar}>
            <div>
                <NavLink to='/profile' activeClassName={navbarModule.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={navbarModule.active}>Message</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={navbarModule.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={navbarModule.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={navbarModule.active}>Settings</NavLink>
            </div>
        </div>)
}

export default Navbar;

