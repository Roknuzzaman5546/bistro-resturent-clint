import { useContext } from "react";
import { Authcontext } from "../Components/Authprovaider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privet = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();
    if (loading) {
        return <h2 className=" mt-40 text-center font-bold text-2xl font-Chinzel">Data is loading .........</h2>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Privet;