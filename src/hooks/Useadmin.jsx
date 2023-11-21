import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontext } from "../Components/Authprovaider/Authprovider";
import useAxiosSecure from "./useaxiosSecure";

const Useadmin = () => {
    const axiossecure = useAxiosSecure()
    const { user } = useContext(Authcontext)
    const { data: isAdmin, isPending: isAdminloading } = useQuery({
        queryKey: [user?.email, 'isAdim'],
        queryFn: async () => {
            const res = await axiossecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminloading];
};

export default Useadmin;