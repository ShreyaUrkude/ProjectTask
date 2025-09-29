const express = require("express");
const router = express.Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/checkout", async (req, res) => {
                    const { email } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1SCfiRKlpwv54F1ZjFH9zYiL", 
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      success_url: "http://localhost:3000/paymentsuccess",
      cancel_url: "http://localhost:3000/paymentfail",
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout error:", err.message);
    res.status(500).json({ error: "Unable to create checkout session" });
  }
});

module.exports = router;
