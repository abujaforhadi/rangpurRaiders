import React from "react";

function Player({ player }) {
  console.log(player);
  const { name, image, country, battingType, biddingPrice, role, bowlingType } =
    player;
  return (
    <div>
      <div className="card  shadow-xl">
        <figure className="px-5 pt-8">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="p-4">
          <h2 className=" text-xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 inline-block pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {name}
          </h2>
          <div className="flex justify-between py-3">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>{" "}
              {country}
            </p>
            <p className="bg-gray-300 py-1 px-2 rounded-lg">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
