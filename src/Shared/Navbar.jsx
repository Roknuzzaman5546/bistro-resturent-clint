import { Link } from "react-router-dom";

const Navbar = () => {
    const manu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Contact use</Link></li>
        <li><Link to="/">Dashbord</Link></li>
    </>

    return (
        <div>
            <div className="navbar max-w-screen-lg text-white fixed z-10 opacity-30 bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {manu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-white text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {manu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;