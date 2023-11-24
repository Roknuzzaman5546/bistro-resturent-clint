import { FaTrash } from "react-icons/fa6";
import useCarts from "../../hooks/useCarts";
import useAxiosSecure from "../../hooks/useaxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Bookingsdash = () => {
    const [cart, refetch] = useCarts();
    const totalprice = cart.reduce((total, item) => total + item.price, 0)
    const axiossecure = useAxiosSecure();


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiossecure.delete(`/carts/${id}`)
                    .then(res => {
                        refetch();
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="ml-5">
            <div className=" flex items-center justify-evenly mb-5">
                <h2 className=" text-3xl font-bold text-center">Total cart: {cart.length}</h2>
                <h2 className=" text-3xl font-bold text-center">Total price: {totalprice}</h2>
                {cart.length ? <Link to="/dashbord/payment">
                    <button className="btn btn-primary">Pay</button>
                </Link>
                    :
                    <button disabled={!cart.length} className="btn btn-primary">Pay</button>
                }
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="">
                        <tr className="bg-base-200">
                            <th>Iamge</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map(items => <tr key={items._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={items.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{items.name}</div>
                                </td>
                                <td>
                                    {items.category}
                                </td>
                                <td>{items.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(items._id)} className="btn btn-square text-red-500">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookingsdash;