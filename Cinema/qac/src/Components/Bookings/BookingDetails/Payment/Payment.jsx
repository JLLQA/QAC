import { Container } from 'reactstrap';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from 'react-router-dom';
import CheckoutForm from './Stripe/CheckoutForm';

const Payment = () => {
    document.title = "Payment"

    const promise = loadStripe("pk_test_51Izl2BDGah0CokonmJQU36VHNHiohBZTTJiu6ywwTbfadiWjlKuB99P3LqLVXJ3QUeOK7nNAMYobQuKG1eMNT9TQ00zWurivvB");

    const location = useLocation();

    console.log(useLocation());

    const ticketTotal = location.state.detail[6];
    const bookName = location.state.detail[7];

    return (
        <div id="dropped-box" className="container-fluid" align="center">
            <Container>
                <h1>PAYMENT</h1>
                <br />
                <Container>
                    <Elements stripe={promise}>
                        <CheckoutForm total={ticketTotal} custName={bookName} />
                    </Elements>
                </Container>
                <br />
            </Container>
        </div>
    );
}

export default Payment;