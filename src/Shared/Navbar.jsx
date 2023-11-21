import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Components/Authprovaider/Authprovider";
import { FaCartShopping } from 'react-icons/fa6';
import useCarts from "../hooks/useCarts";

const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext)
    const [cart] = useCarts();

    const handlLogout = () => {
        userLogout()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    const manu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Contact use</Link></li>
        <li><Link to="/">Dashbord</Link></li>
        <li><Link to="/menu">Our menu</Link></li>
        <li><Link to="/shop/salad">Our Shop</Link></li>
    </>

    return (
        <div>
            <div className="navbar max-w-screen-lg mx-auto text-white fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            {manu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-white text-xl font-bold font-Chinzel">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex btn">
                    <ul className="menu menu-horizontal px-1">
                        {manu}
                    </ul>
                </div>
                <div className=" navbar-end">
                    {user ?
                        <>
                            <Link to="/dashbord/cart">
                                <button className="btn mr-2">
                                    <FaCartShopping />
                                    <div className="badge badge-secondary">{cart.length}</div>
                                </button>
                            </Link>
                            <button className=" btn" onClick={handlLogout}>Log out</button>
                        </>
                        :
                        <Link to='/login'><button className=" btn ">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;