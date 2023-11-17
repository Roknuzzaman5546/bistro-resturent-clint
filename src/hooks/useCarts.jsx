import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useaxiosSecure";
import { useContext } from "react";
import { Authcontext } from "../Components/Authprovaider/Authprovider";

const useCarts = () => {
    const { user } = useContext(Authcontext)
    const axiossecure = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiossecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCarts;