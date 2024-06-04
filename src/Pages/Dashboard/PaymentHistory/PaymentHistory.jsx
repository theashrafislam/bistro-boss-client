import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import userAxiosSecure from "../../../Hooks/userAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = userAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h1 className="text-3xl">Total Payment: {payments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.price}</td>
                                <td>{item.transactionId}</td>
                                <td>{item.status}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;