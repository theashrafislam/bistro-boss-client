import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-pi-ruby.vercel.app'
})
const userAxiosPublic = () => {
    return axiosPublic;
};

export default userAxiosPublic;