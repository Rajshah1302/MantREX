import React from "react";
import { rwa } from "../assets/";
import styles, { layout } from "../style";
import Button from "./Button";
import Liquidity from "./Liquidity";
import OrderBookTable from "./orderBook";
import TradeData from "./TardeData";
import HorizontalScroller from "./HorizontalScroller";
// import list from './list';

const Trading = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Buy Real World Assests <br className="sm:block hidden" /> in a few
            easy steps.
          </h2>
          <div
            className="container"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <div className="mt-5">
              <label style={{ color: "white", display: "block" }}>RWA</label>
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
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="platinum">Platinum</option>
                <option value="diamond">Diamond</option>
                <option value="diamond">Platinum</option>
                <option value="diamond">Copper</option>
                <option value="diamond">Broze</option>
                <option value="diamond">Nickle</option>
              </select>
            </div>

            <div className="mt-3">
              <label style={{ color: "white", display: "block" }}>Token</label>
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
                <option value="gold">OM</option>
                {/* <option value="silver">USD</option>
                {/* <option value="platinum">DNR</option> */}
              </select>
            </div>
            <input
              width="100%"
              placeholder="Amount"
              borderRadius="15%"
              className=" mt-8 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-9/12 py-2 px-3 transition duration-300 hover:border-blue-500"
            ></input>
          </div>
          <list/>
          <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <button
              type="button"
              className={`py-4 px-6  font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-5`}
            >
              Buy
            </button>
            <button
              type="button"
              className={`py-4 px-6 mx-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-5`}
            >
              Sell
            </button> 
            {/* <Liquidity/> */}
          </div>
         </div> 

        <div className={layout.sectionImg}>
          <img
            src='../chart.jpg'
            alt="billing"
            className="w-50vw h-50vh"
            style={{
            //   animation: "upDown 2.5s ease infinite",
              width:'50vw'
            }}
          />
          {/* <video src="https://drive.google.com/file/d/1IdmiP4S1Wr18dwIm0n7AMRtpZBr4-n4w/view?usp=sharing"></video> */}
          
          {/* <OrderBookTable/> */}
          {/* <TradeData/> */}
        </div>
      </section>
    </div>
    {/* <HorizontalScroller/> */}
  </div>
);

export default Trading;
