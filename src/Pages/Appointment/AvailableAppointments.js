import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointments = ({ date }) => {
  const toDay = date ? (
    ": " + format(date, "PP")
  ) : (
    <span className=""> Select your day </span>
  );

  // const [services, setServices] = useState([]);

  const [treatment, setTreatment] = useState(null);

  const formatedData = format(date, "PP");
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formatedData], () =>
    fetch(
      `https://a-dentist-server.onrender.com/available?date=${formatedData}`
    ).then(res => res.json())
  );

  if (isLoading) {
    return (
      <div className="h-full">
        {" "}
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-12">
      <p className="font-sans font-normal text-xl text-primary text-center mt-4">
        {" "}
        Available Appointments on {toDay}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {services?.map(service => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          date={date}
          treatment={treatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
