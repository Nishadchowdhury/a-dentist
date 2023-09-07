import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ appointment }) => {
  const stripe = useStripe();

  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const { _id, price, patientEmail, patientName } = appointment;

  // console.log(appointment);

  useEffect(() => {
    fetch(
      "https://a-dentist-server.onrender.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
        console.log("data", data);
      });
  }, [price]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod(
      {
        type: "card",
        card,
      }
    );

    if (error) {
      console.log("[error]", error);
      setCardError(error?.message);
      setCardSuccess("");
    } else {
      setCardError("");
    }

    setLoading(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setCardSuccess("");
      setLoading(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setCardSuccess("Congrats! Your payment is completed");

      //store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://a-dentist-server.onrender.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
        body: JSON.stringify(payment),
      })
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          console.log(data);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-red-500 "> {cardError} </p>}

      {cardSuccess && (
        <div className="text-green-500">
          <p> {cardSuccess} </p>
          <p>
            {" "}
            Your transaction Id:{" "}
            <span className="text-orange-500">
              {" "}
              {transactionId}{" "}
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
