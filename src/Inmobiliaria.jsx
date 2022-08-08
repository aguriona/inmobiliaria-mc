import { NavBar } from './components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

export const Inmobiliaria = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}
