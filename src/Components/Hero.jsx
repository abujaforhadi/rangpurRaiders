import React from "react";
import pic1 from "../assets/image/bg-shadow.png";
import pic from "../assets/image/Rangpur_Riders_Logo.png";

function Hero() {
  return (
    <div>
      <div
        className="hero  rounded-lg bg-cover bg-no-repeat"  style={{
            backgroundImage: `url(${pic1})`, 
          }}
        
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <figure className="">
                <img src={pic} alt="" srcset="" />
            </figure>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
