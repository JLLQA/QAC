import React, { useMemo } from "react";
import { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import { useHistory } from 'react-router'
import useResponsiveFontSize from "./useResponsiveFontSize";
import { Container } from "reactstrap";

const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        [fontSize]
    );

    return options;
};

const Stripe = ({ total }) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [card, setCardName] = useState(undefined);

    const cardName = ({ target }) => {
        setCardName(target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        console.log("[PaymentMethod]", payload);
        console.log(card);

        alert("Payment complete")

        // history.push({
        //     pathname: "/",
        // })
    };

    const history = useHistory();

    return (
        <form onSubmit={handleSubmit}>
            <Container>
                {/* <Container>
                    <label>Name on Card</label>
                    <input id="cardName" placeholder="Jane Doe" type="text" onChange={cardName}></input>
                </Container> */}
                <Container>
                </Container>
                <br/>
                <Container>
                    <label>Card number</label>
                    <CardNumberElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </Container>
                <Container>
                    <label>Expiration date</label>
                    <CardExpiryElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </Container>
                <Container>
                    <label>CVC</label>
                    <CardCvcElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </Container>
                <button id="submitButtonStripe" type="submit" disabled={!stripe}>
                    Pay £{total}
                </button>
            </Container>
        </form>
    );
};

export default Stripe;