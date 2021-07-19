import express from "express";

const app = express();
const port = 3000; //add your port here
const PUBLISHABLE_KEY = "pk_test_51JBp6BFdjGfYcejFEt3mjBAIJKsaYio3ADiLrKcPF8Tqwoz8sJ2FxSdvqkijkMABI7DwNWjtvCJy2D7KjZAIkS0d00ZqwvCfb7";
const SECRET_KEY = "sk_test_51JBp6BFdjGfYcejFegWOQJSfxvXDF6jYTRWkKDXT9urMt1sOK6cmVbZOuRNNsHUPvubXIMK9eXAVaPr4gmUQurhH00RZ2zO0ZQ";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
