import { useContext } from "react";
import { Authcontext } from "../../Components/Authprovaider/Authprovider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useaxiosSecure";
import useCarts from "../../hooks/useCarts";

const Foodcard = ({ items }) => {
    const [, refetch] = useCarts();
    const { image, recipe, name } = items;
    const { user } = useContext(Authcontext)
    const axiossecure = useAxiosSecure();

    const handleAdd = (items) => {
        console.log(items)
        const { image, recipe, name, category, price, _id } = items;
        const itemsCarts = {
            menuId: _id,
            email: user?.email,
            name,
            recipe,
            image,
            category,
            price
        }
        axiossecure.post('/carts', itemsCarts)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire(`${name} is added succesfully`)
                }
                refetch();
            })

    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col items-center  text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAdd(items)}
                        className="btn btn-outline btn-secondary bg-gray-300 border-0 border-b-4">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;