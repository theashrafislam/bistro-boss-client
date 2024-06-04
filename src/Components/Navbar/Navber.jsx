import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const Navber = () => {
    const [cart] = useCart();
    const { user, signOutUser } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        signOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navber = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Our Shop</Link></li>
        {
            //user ? 'true' : 'false'
            //user ? conditaion ? 'true' : 'false' : 'false'
        }
        {
            user && isAdmin && <li><Link to="/dashboard/admin-home">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/user-home">Dashboard</Link></li>
        }
        {
            user ? <>
                <Link to="/dashboard/cart" className="btn">
                    <FaCartPlus className="text-3xl" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </Link>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-ghost">Sign Out</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 opacity-40 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navber}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navber}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navber;