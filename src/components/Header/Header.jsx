import { NavLink } from 'react-router-dom';
import cls from './header.module.css';

const Header = () => {
    return (
        <header className={cls.headerWrapper}>
            <NavLink to={'/xmlhttprequest'}>XMLHTTP REQUEST</NavLink>
            <NavLink to={'/fetch'}>FETCH</NavLink>
            <NavLink to={'/promise'}>PROMISE</NavLink>
            <NavLink to={'/trycatch'}>TRY CATCH (ASYNC AWAIT)</NavLink>
        </header>
    )
};

export default Header;