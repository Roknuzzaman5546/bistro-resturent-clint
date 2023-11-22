import { useContext } from "react";
import Useadmin from "../hooks/Useadmin";
import { Authcontext } from "../Components/Authprovaider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Adminprivet = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const [isAdim, isAdminloading] = Useadmin()
    const location = useLocation();
    
    if (loading || isAdminloading) {
        return <h2 className=" mt-40 text-center font-bold text-2xl font-Chinzel">Data is loading .........</h2>
    }
    if (user && isAdim) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Adminprivet;