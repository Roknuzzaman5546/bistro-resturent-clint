import { FaCalendar, FaCartShopping, FaCookie, FaHouseMedical, FaHouse, FaUtensils, FaList, FaBook, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { CiMenuBurger, CiShoppingBasket } from "react-icons/ci";
import useCarts from "../hooks/useCarts";
import Useadmin from "../hooks/Useadmin";


const Dashbord = () => {
    const [carts] = useCarts();
    const [isAdmin] = Useadmin();
    return (
        <div className=" flex p-5">
            <div className=" w-64 h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashbord/home">
                                    <FaHouse></FaHouse>
                                    Admin home</NavLink></li>
                                <li><NavLink to="/dashbord/additems">
                                    <FaUtensils></FaUtensils>
                                    Add  items</NavLink></li>
                                <li><NavLink to="/dashbord/manageitems">
                                    <FaList></FaList>
                                    Manageitems</NavLink></li>
                                <li><NavLink to="/dashbord/manageBookings">
                                    <FaBook></FaBook>
                                    Bookings</NavLink></li>
                                <li><NavLink to="/dashbord/Users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashbord/home">
                                    <FaHouseMedical></FaHouseMedical>
                                    User home</NavLink></li>
                                <li><NavLink to="/dashbord/cookie">
                                    <FaCookie></FaCookie>
                                    Add item</NavLink></li>
                                <li><NavLink to="/dashbord/cart">
                                    <FaCartShopping></FaCartShopping>
                                    My cart</NavLink></li>
                                <li><NavLink to="/dashbord/booking">
                                    <FaCalendar></FaCalendar>
                                    User Bookings ({carts.length})</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHouseMedical></FaHouseMedical>
                        Home</NavLink></li>
                    <li><NavLink to="/menu">
                        <CiMenuBurger />
                        Menu</NavLink></li>
                    <li><NavLink to="/shop/salad">
                        <CiShoppingBasket></CiShoppingBasket>
                        Shop</NavLink></li>
                </ul>
            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;