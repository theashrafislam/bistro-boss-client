import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import userAxiosPublic from "../../Hooks/userAxiosPublic";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signInWithGoogle} = useContext(AuthContext);
    const from = location.state?.from?.pathname || "/";
    const axiosPublic = userAxiosPublic();

    const handleGoogleLogin = e => {
        e.preventDefault();
        signInWithGoogle()
            .then((res) => {
                const userEmail = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axiosPublic.post('/users', userEmail)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            title: "User Login Successfullly.",
                            showClass: {
                                popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                                popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                        });
                        navigate(from);
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 mt-3 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:dark:ring-violet-600">
            <FcGoogle className='text-3xl' />
            <p className='font-bold'>Login with Google</p>
        </button>
    );
};

export default SocialLogin;