import { useEffect, useState } from "react";
import Title from "../../Components/Title";

const Popularmenu = () => {
    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const filtermenus = data.filter(menu => menu.category == 'popular')
                setMenus(filtermenus)
            })
    }, [])

    return (
        <div>
            <Title
                Subheading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></Title>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    menus.map(menu => <>
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
                <button className="btn btn-outline border-0 border-b-4 mt-7">View all</button>
            </div>
        </div>
    );
};

export default Popularmenu;