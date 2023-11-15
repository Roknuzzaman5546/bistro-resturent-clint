const Menucategory = ({ items }) => {

    return (
        <div className=" my-10">
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
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
                <button className="btn btn-outline border-0 border-b-4 mt-7">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Menucategory;