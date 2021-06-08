import Navbar from '../../../Multipage/Navbar/Navbar';
import { Container } from 'reactstrap';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import Stripe from './Stripe';
import CheckoutForm from './Stripe/CheckoutForm';


const Payment = () => {

    const promise = loadStripe("pk_test_51Izl2BDGah0CokonmJQU36VHNHiohBZTTJiu6ywwTbfadiWjlKuB99P3LqLVXJ3QUeOK7nNAMYobQuKG1eMNT9TQ00zWurivvB");

    const testTotal = 45.91;
    const testName = "Jane Doe";

    return (
        <>
            <Navbar />
            <div id="dropped-box" className="container-fluid" align="center">
                <Container>
                    <h1>PAYMENT</h1>
                    <br />
                    <Container>
                        <Elements stripe={promise}>
                            {/* <Stripe total={testTotal} /> */}
                            <CheckoutForm total={testTotal} custName={testName}/>
                        </Elements>
                    </Container>
                    <br />
                </Container>
            </div>
        </>
    );
}

export default Payment;