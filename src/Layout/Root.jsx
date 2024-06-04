import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navber from "../Components/Navbar/Navber";

const Root = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login') || location.pathname.includes('/signup');
    return (
        <div>
            {isLogin || <Navber />}
            <Outlet />
            {isLogin || <Footer />}
        </div>
    );
};

export default Root;