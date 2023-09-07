import React from "react";
import { toast } from "react-toastify";

const DeleteConfirm = ({ deleteingDr, refetch, setDeleteingDr }) => {
  const { name, img, specialty, email } = deleteingDr;

  const handleDeleteDr = () => {
    fetch(`https://a-dentist-server.onrender.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.deletedCount);

        if (data.deletedCount) {
          toast.warning(`Doctor: ${name} is deleted .`);
          setDeleteingDr(null);
          refetch();
        }
      });
  };

  return (
    <div className="z-50">
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag-- > */}
      <input
        type="checkbox"
        id="delete-confirm-modal"
        class="modal-toggle"
      />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg to-red-500">
            Are you sure , to delete Dr.{" "}
            <span className="font-extrabold">{name}</span> !
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of
            subscription to use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDeleteDr()}
              className="btn btn-error btn-xs "
            >
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
