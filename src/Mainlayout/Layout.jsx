import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Layout = () => {
    const location = useLocation();

    const navfooterhide = location.pathname.includes('login');

    return (
        <div>
            {navfooterhide || <Navbar></Navbar>}
            <Outlet></Outlet>
            {navfooterhide || <Footer></Footer>}
        </div>
    );
};

export default Layout;