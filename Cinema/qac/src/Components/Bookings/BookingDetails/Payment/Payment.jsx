import Navbar from '../../../Multipage/Navbar/Navbar';
import { Container } from 'reactstrap';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from './Stripe';

const Payment = () => {

    const stripePromise = loadStripe("pk_test_51Izl2BDGah0CokonmJQU36VHNHiohBZTTJiu6ywwTbfadiWjlKuB99P3LqLVXJ3QUeOK7nNAMYobQuKG1eMNT9TQ00zWurivvB");
    const testTotal = 45.91;

    return (
        <>
            <Navbar />
            <div id="dropped-box" className="container-fluid" align="center">
                <Container>
                    <h1>PAYMENT</h1>
                    <br />
                    <Container>
                        <Elements stripe={stripePromise}>
                            <Stripe total={testTotal} />
                        </Elements>
                    </Container>
                    <br/>
                </Container>
            </div>
        </>
    );
}

export default Payment;