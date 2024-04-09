import { useChain, useWallet } from "@cosmos-kit/react"; // Import Keplr wallet hooks
import { useState } from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { connect } = useChain("mantrachaintestnet");
  const { mainWallet } = useWallet("keplr-extension"); // Access Keplr wallet connection functions

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      await connect();
    } catch (error) {
      console.error("Error connecting Keplr wallet:", error);
    }
    setIsLoading(false);
  };

  return (
    <button
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      onClick={handleConnect}
      disabled={isLoading}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        style={{
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "white";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor =
            "rgb(0 4 15 / var(--tw-bg-opacity))";
        }}
      >
        <div className={`${styles.flexStart} flex-row`}>
          {/* <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Connect</span>
          </p> */}

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Wallet</span>
        </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
            />
            </div>
      </div>
    </button>
  );
};

export default GetStarted;
