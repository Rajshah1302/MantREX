import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Swap from "./swap";
// import list from './list';

const CardDeal = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          {/* <h2 className={styles.heading2}>
            Optimal token swaps <br className="sm:block hidden" /> in a few easy
            steps.
          </h2>
          <div
            className="container"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <div className="mt-5">
              <label style={{ color: "white", display: "block" }}>From</label>
              <select
          type="text"
          placeholder="RWA 1"
          className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 w-full transition duration-300 hover:border-blue-500"
          style={{
            width: "75%",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      
      <div className="mt-3">
        <label style={{ color: "white", display: "block" }}>To</label>
        <select
          type="text"
          placeholder="Select Asset"
          className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-5 w-full transition duration-300 hover:border-blue-500"
          style={{
            width: "75%",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="platinum">Platinum</option>
          <option value="diamond">Diamond</option>
        </select>
                
            </div>
          </div>
          {/* <list/> */}

          {/* <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-5`}
          > */}
            {/* Swap */}
          {/* </button>  */}
        {/* </div>  */}
        <Swap/>
        </div>
        <div className={layout.sectionImg}>
          <img src={card} alt="billing" className="w-full h-full"   style={{
              animation: "upDown 2.5s ease infinite",
            }}/>
        </div>
      </section>
    </div>
  </div>
);

export default CardDeal;
