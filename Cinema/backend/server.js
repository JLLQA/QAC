const express = require("express");
const cors = require('cors');
const app = express();
const stripe = require("stripe")("sk_test_51Izl2BDGah0Cokonympjgl54OpP2z1iOcLsUiZ9YqgvRG8tClwDP7Vz4WMjqyQYzbmmvpMmkogSthHbd1QgQBKck00Xjpu0BUy");

app.use(express.static("."));
app.use(express.json());
app.use(cors());
app.options("*", cors());

const calculateOrderAmount = items => {
    console.log(items[0].price);
    var orderAmount = (items[0].price*100)
    console.log(orderAmount);
    return orderAmount;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "gbp"
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));

module.exports = app;