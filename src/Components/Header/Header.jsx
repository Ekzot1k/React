import headerModule from './Header.module.css';
import reactLogo from'./React.png';

const Header = () => {
    return (
        <div className={headerModule.header}>
            <img src={reactLogo}></img>
        </div>)
}

export default Header;