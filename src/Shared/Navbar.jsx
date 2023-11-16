import { Link } from "react-router-dom";

const Navbar = () => {
    const manu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Contact use</Link></li>
        <li><Link to="/">Dashbord</Link></li>
        <li><Link to="/menu">Our menu</Link></li>
        <li><Link to="/shop/salad">Our Shop</Link></li>
    </>

    return (
        <div>
            <div className="navbar max-w-screen-lg text-white fixed z-10 opacity-30 bg-black">
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
                <div className=" navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {manu}
                    </ul>
                </div>     
                <div className="">
                    <Link to='/login'><button className=" btn ">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;