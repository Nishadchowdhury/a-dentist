import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L1AKaFvzbbpnw6as8zL4ESyMeYTSLpi4fdgG8699CatvCDYs9NoRx2ZXoAripSGuC8F2kzHelz9qXGyhX9j6Rl800hYDmX1Fd"
);

const Payment = () => {
  const id = useParams().id;
  const url = `https://a-dentist-server.onrender.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(
    ["booking", id],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      }).then(res => res.json())
  );

  // console.log(id);

  if (isLoading) {
    return <Loading />;
  }

  // console.log(appointment);

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p>Hello , {appointment.patientName}</p>
          <h2 class="card-title">
            Please Pay for{" "}
            <span className="underline">
              {" "}
              {appointment.treatment}{" "}
            </span>
          </h2>
          <p className="text-sm">
            Your Appointment:{" "}
            <span className="text-red">{appointment.date} </span> at{" "}
            <span className="text-red-700">{appointment.time}</span>
          </p>
          <p>Please Pay: ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
