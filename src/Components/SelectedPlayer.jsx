import React from "react";
import PropTypes from "prop-types";

function SelectedPlayer({ p,handleDelete }) {
  const { name, image, role } = p;
  return (
    <div className="flex justify-between border p-1 border-e-gray-100 mb-3 rounded-lg md:px-5">
      <div className="flex  ">
        <div className="avatar mr-4">
          <div className="w-24 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div>
          <p className="text-2xl">{name}</p>
          <p className="text-[#13131399] font-normal ">{role}</p>
        </div>
      </div>
      <button
        onClick={() => handleDelete(p)}
        className="btn bg-red-500 text-white px-2 py-1 hover:bg-red-600 "
      >
        Delete
      </button>{" "}
    </div>
  );
}

SelectedPlayer.propTypes = {};

export default SelectedPlayer;
