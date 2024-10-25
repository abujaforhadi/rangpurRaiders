import React from "react";
import PropTypes from "prop-types";
import pic from "../assets/image/Rangpur_Riders_Logo.png";
import pic1 from "../assets/image/bgg-shadow.png";

function Footer() {
  return (
    <div className="mt-36 ">
      <div className=" flex justify-center items-center" >
        <div className=" absolute -mt-20">
          <div className="stats shadow my-4 mx-14 bg-cover bg-center">
            <div className="stat text-center" style={{
              backgroundImage: `url(${pic1})`,
            }}>
              <div className="text-3xl font-bold ">Subscribe to our Newsletter</div>
              <div className="text-xl font-semibold text-[#131313B3] py-8 px-12">
                Get the latest updates and news right in your inbox!
              </div>
              <div className="stat-desc">
                <div className="join">
                  <input
                    className="input input-bordered join-item"
                    placeholder="Email"
                  />
                  <button className="btn join-item rounded-r-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#06091A] py-20 ">
        <div className="flex justify-center mb-2">
          <img className="w-1/12" src={pic} />
        </div>
        <footer className="footer  text-base-content px-10 text-white ">

          <nav>
            <h6 className="footer-title">About Us</h6>
            <p>The Rangpur Riders are a professional cricket team <br /> based in Rangpur City, Rangpur. The Riders compete in Bangladesh <br /> Premier League (BPL), the premier cricket league in Bangladesh.</p>


          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
