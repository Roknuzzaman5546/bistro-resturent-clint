import { loadStripe } from "@stripe/stripe-js";
import Title from "../../Components/Title";
import { Elements } from "@stripe/react-stripe-js";
import Cheakoutfrom from "./Cheakoutfrom";

const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT)
console.log(import.meta.env.VITE_PAYMENT)

const Payment = () => {
    return (
        <div className=" ml-5">
            <Title
                Subheading={"----Payment with your account----"}
                heading={"payment"}>
            </Title>
            <div>
                <Elements stripe={stripePromis}>
                    <Cheakoutfrom></Cheakoutfrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;