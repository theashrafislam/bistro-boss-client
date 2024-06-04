import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../Components/ShareSectionHeader/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_PK);

const Payment = () => {

    return (
        <div>
            <SectionHeader heading={'Payment'} subHeading={'Payment after to eat'}/>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;