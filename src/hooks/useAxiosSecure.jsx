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
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axiossecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const status = error.response.status;
        // console.log('axios token token errror is', error.response.status)
        if (status) {
            userLogout();
            navigate('/login')
        }
        return Promise.reject(error);
    });

    return axiossecure;
};

export default useAxiosSecure;