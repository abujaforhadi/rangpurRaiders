import React, { useState } from "react";
import Hero from "./Hero";
import Available from "./Available";
import Selected from "./Selected";

function MainSection({hendlePlayerData,playerData,handleDelete}) {
  const [activeBtn, setActiveBtn] = useState({
    Available: true,
    status: "Available",
  });

  const handleActiveBtn = (status) => {
    setActiveBtn({
      Available: status === "Available",
      status: status,
    });
  };

  return (
    <div>
      <h1>Main Section</h1>
      <Hero />

      <div className="flex justify-between py-5">
        <h3 className="font-bold text-xl">Choose Our Riders </h3>
        <div className="flex gap-2">
          <button
            onClick={() => handleActiveBtn("Available")}
            className={`btn btn-outline font-bold text-xs ${
              activeBtn.status === "Available" ? "btn-active" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleActiveBtn("Selected")}
            className={`btn btn-outline font-bold text-xs ${
              activeBtn.status === "Selected" ? "btn-active" : ""
            }`}
          >
            Selected ({playerData.length})
          </button>
        </div>
      </div>

     
      {activeBtn.Available? <Available hendlePlayerData={hendlePlayerData} />:<Selected handleDelete={handleDelete} playerData={playerData} />}
      
    </div>
  );
}

export default MainSection;
