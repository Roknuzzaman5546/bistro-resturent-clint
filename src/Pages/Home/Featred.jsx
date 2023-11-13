import Title from "../../Components/Title";
import img from '../../assets/home/featured.jpg'

import './featured.css'

const Featred = () => {
    return (
        <div className="featured text-white pt-2 bg-fixed mt-10">
            <Title
            Subheading={"---Check it out---"}
            heading={'FROM OUR MENU'}
            ></Title>
            <div className="flex justify-center items-center bg-slate-500 bg-opacity-40 px-10 pt-10 pb-20 gap-10 ">
                <img className="w-full" src={img} alt="" />
                <div>
                    <h2>March 20, 2023</h2>
                    <h2 className=" uppercase">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className=" btn btn-outline border-0 border-b-4 mt-2">Get more</button>
                </div>
            </div>
        </div>
    );
};

export default Featred;