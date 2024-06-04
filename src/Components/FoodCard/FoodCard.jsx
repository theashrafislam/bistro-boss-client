import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import userAxiosSecure from "../../Hooks/userAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ menu }) => {
    const { recipe, image, price, name, _id } = menu;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = userAxiosSecure();
    const [, refetch] = useCart();

    const handleAddCart = () => {
        // console.log(food, user.email);
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name}, Added to the cart.`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //refetch the cart data
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "User Not Login In",
                text: "If you add the cartt please login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login In"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mt-2 mr-4 bg-gray-500 px-2 py-2 text-white bg-opacity-60">${price}</p>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddCart} className="btn btn-outline bg-slate-100 btn-secondary border-orange-500 border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;