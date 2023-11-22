import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../Components/Authprovaider/Authprovider";
import { useNavigate } from "react-router-dom";

const axiossecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { userLogout } = useContext(Authcontext)
    const navigate = useNavigate()
    axiossecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('inside the token', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    
    axiossecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log(error)
        // console.log('axios token token errror is', error.response.status)
        if (status === 401 || status === 403) {
            await userLogout();
            navigate('/login')
        }
        return Promise.reject(error);
    });
    return axiossecure;
};


export default useAxiosSecure;