import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";

const Menucategory = ({ items, title, img }) => {

    return (
        <div>
            { title && <Cover
                img={img}
                title={title}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown'}
            ></Cover>}
            <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    items.map(menu => <>
                        <div className=" flex gap-4">
                            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={menu.image} alt="" />
                            <div>
                                <h2 className=" text-xl uppercase">{menu.name}----------</h2>
                                <p>{menu.recipe}</p>
                            </div>
                            <p className=" text-yellow-600">${menu.price}</p>
                        </div>
                    </>)
                }
            </div>
            <div className=" flex flex-col justify-center items-center">
                <Link to={`/shop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 my-7">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default Menucategory;