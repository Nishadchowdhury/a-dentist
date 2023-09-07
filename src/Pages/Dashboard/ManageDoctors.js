import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirm from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteingDr, setDeleteingDr] = useState(false);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://a-dentist-server.onrender.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    }).then(res => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(doctors);

  return (
    <div>
      <h1 className="text-xl"> Manage Doctors {doctors?.length} </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeleteingDr={setDeleteingDr}
              >
                {" "}
              </DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteingDr && (
        <DeleteConfirm
          deleteingDr={deleteingDr}
          refetch={refetch}
          setDeleteingDr={setDeleteingDr}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
