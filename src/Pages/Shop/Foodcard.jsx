const Foodcard = ({items}) => {
    const {image, recipe, name} = items;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col items-center  text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-secondary bg-gray-300 border-0 border-b-4">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;