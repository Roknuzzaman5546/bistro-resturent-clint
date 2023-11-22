import { useForm } from "react-hook-form";
import Title from "../../Components/Title";
import { FaUtensils } from "react-icons/fa6";
import UseAxiospublic from "../../hooks/UseAxiospublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Additems = () => {
    const axiosPublic = UseAxiospublic();
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imagefile = { image: data.image[0] }
        const res = await axiosPublic.post(image_api, imagefile, {
            headers: {
                'content-type': 'multirpart/form-data'
            }
        });
        console.log(res.data)
    }

    return (
        <div className="ml-7">
            <div>
                <Title
                    Subheading={"---What's new?---"}
                    heading={'ADD AN ITEM'}
                ></Title>
            </div>
            <div className=" bg-slate-200 px-5 py-8 space-y-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product name?</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("name", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product name?</span>
                            </label>
                            <select {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled defaultValue={"Please select"}>Please select</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <label className="label my-4">
                        <span className="label-text">Price*</span>
                    </label>
                    <textarea {...register("recipe")} className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                    <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />
                    <br />
                    <button className="btn mt-3 font-bold">
                        Add items <FaUtensils className="text-xl"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Additems;