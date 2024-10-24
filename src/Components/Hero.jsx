import React from "react";
import pic1 from "../assets/image/bg-shadow.png";
import pic from "../assets/image/Rangpur_Riders_Logo.png";

function Hero() {
  return (
    <div>
      <div
        className="hero  rounded-lg bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${pic1})`,
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <img className="mx-auto" src={pic} alt="Rangpur Riders Logo" />
            <p className="py-6 w-full text-white text-xl">
              The Rangpur Riders are a professional cricket team based in
              Rangpur City, Rangpur. The Riders compete in Bangladesh Premier
              League (BPL), the premier cricket league in Bangladesh.
            </p>
            <p className="text-[#FFFFFFB3] pb-4 font-inter">
              Beyond Boundaries Beyond Limits
            </p>
            <button className="btn btn-outline btn-warning">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
