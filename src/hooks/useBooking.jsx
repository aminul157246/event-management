
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBooking = () => {

    const axiosPublic = useAxiosSecure()
    const { user } = useAuth()

    const { refetch, data: book } = useQuery({
        queryKey: ['book', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/carts?email=${user?.email}`)
            // console.log(res.data)
            return res.data;
        },

    })

    return [book, refetch];

};

export default useBooking;
