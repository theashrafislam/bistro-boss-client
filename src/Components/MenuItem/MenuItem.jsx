const MenuItem = ({menu}) => {
    const {recipe, image, price, name} = menu;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[110px]" src={image} alt="" />
            <div>
                <h3>{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;