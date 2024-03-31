import axios from 'axios';


export const axiosPublic = axios.create({
    baseURL : 'https://event-management-server-lovat.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic ;
};

export default useAxiosPublic;