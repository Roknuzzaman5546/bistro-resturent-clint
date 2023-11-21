import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Authcontext } from "../Components/Authprovaider/Authprovider";
import UseAxiospublic from "../hooks/UseAxiospublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ScoilLogin = () => {
    const axiospublic = UseAxiospublic()
    const { usergoogleLogin } = useContext(Authcontext)
    const navigate = useNavigate()

    const handleGoogle = () => {
        usergoogleLogin()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiospublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire("user logged in and user add succesfully!")
                            navigate('/')
                        }
                        else {
                            Swal.fire("user logged in succesfully!")
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className=" w-1/2 mx-auto">
            <button onClick={handleGoogle} className="btn">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default ScoilLogin;