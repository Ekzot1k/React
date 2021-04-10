import navbarModule from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={navbarModule.navbar}>
            <div>
                <a href="/profile">Profile</a>
            </div>
            <div>
                <a href="/dialogs">Message</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </div>)
}

export default Navbar;

