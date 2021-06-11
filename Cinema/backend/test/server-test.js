process.env.NODE_ENV = 'test';

const server = require("../server");
const stripe = require("stripe")("sk_test_51Izl2BDGah0Cokonympjgl54OpP2z1iOcLsUiZ9YqgvRG8tClwDP7Vz4WMjqyQYzbmmvpMmkogSthHbd1QgQBKck00Xjpu0BUy");

const chai = require('chai');
const expect = chai.expect;
// const mongoose = require('mongoose');
const should = chai.should();

const chaiHttp = require('chai-http');
// const app = require('../index');

chai.use(chaiHttp);

describe('/server Testing the payment requests...', () => {

    it('should be able to send a payment to stripe', (done) => {

        const orderTotal = 1313;
        const paymentIntent = stripe.paymentIntents.create({
            amount: orderTotal,
            currency: "gbp"
        });
        chai
            .request(server)
            .post("/create-payment-intent")
            .send({ clientSecret: paymentIntent.client_secret})
            .end((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body);
                    res.should.have.status(200);
                }
            });
            done();
    });
});