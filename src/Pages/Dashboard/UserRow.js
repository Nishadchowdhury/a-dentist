import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmit = () => {
    fetch(
      `https://a-dentist-server.onrender.com/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      }
    )
      .then(res => {
        if (res.status === 403) {
          toast.error("failed to Make an admin");
        }
        return res.json();
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast("SuccessFully made an Admin");
        }
      });
  };

  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmit} className="btn btn-xs">
            {" "}
            Make Admin{" "}
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Delete User</button>
      </td>
    </tr>
  );
};

export default UserRow;
