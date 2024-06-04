// api, axios (axios secure), tan stack

import { useQuery } from "@tanstack/react-query";
import userAxiosSecure from "./userAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = userAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;