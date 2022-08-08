import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {

    const activeLink = ({ isActive }) => isActive ? 'nav_item nav_active' : "nav_item"

    return (
        <nav className='nav_bar'>
            <Link className='nav_logo' to='/'>
                <p><span>MC</span></p>
            </Link>
            <ul className='nav_items'>
                <NavLink className={activeLink} to='/'>
                    <span className="material-symbols-outlined">home</span>
                    <p className='nav_item_text'>Inicio</p>
                </NavLink>
                <NavLink className={activeLink} to='/projects'>
                    <span className="material-symbols-outlined">work</span>
                    <p className='nav_item_text'>Inmuebles</p>
                </NavLink>
                <NavLink className={activeLink} to='/contact'>
                    <span className="material-symbols-outlined">mail</span>
                    <p className='nav_item_text'>Contacto</p>
                </NavLink>
            </ul>
        </nav>
    )
}