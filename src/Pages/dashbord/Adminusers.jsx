import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useaxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const Adminusers = () => {
    const axiossecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiossecure.get('/users')
            return res.data;
        }
    })

    const handleMakeadmin = id =>{
        console.log('admin related', id)
    }

    const handleDelete = id => {
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
        <div className=" mr-2">
            <div className=" flex justify-evenly my-2">
                <h2 className=" text-3xl font-bold">All users</h2>
                <h2 className=" text-3xl font-bold">Total users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=" w-full">
                            {
                                users.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={() => handleMakeadmin(item._id)} className="btn btn-square text-red-500 text-xl">
                                            <FaUsers></FaUsers>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-square text-red-500">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Adminusers;