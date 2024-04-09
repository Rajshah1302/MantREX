'use client'
import React, { useState } from "react";
import "./NftCard.css";

const NFTCard = ({ nftData }) => {
  const [isLended, setIsLended] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // Display a message after 3 seconds
    setTimeout(() => {
      alert("Transaction completed");
      setIsLended(true);
    }, 1000);
  };

  return (
    <>
      <div className="card itemStyle bg-light m-4 shadow-lg nft-card ">
        <img
          className="card-img-top align-items-center justify-content-center rounded"
          src={nftData.image}
          style={{ height: "230px", width: "100%" }}
          alt="Card image cap"
        />
        <div style={{ color: "white", backgroundColor: "transparent", textAlign: "center" }} className="card-body mb-0 pb-0">
          <h5 style={{ fontWeight: "bold", fontSize: "1.5rem" }} className="card-title">{nftData.title}</h5>
          <p style={{ marginBottom: "0", textAlign: "center", fontSize: "1.2rem" }}>APR: {nftData.apr}% | TVL: ${nftData.tvl}</p>
          <button
            style={{ backgroundColor: "#343a40", color: "white", border: "none", borderRadius: "1.25rem", padding: "0.5rem 1rem", fontSize: "1.2rem", marginTop: "0.5rem" }}
            onClick={handleClick}
          >
            Invest: ${nftData.investPrice}
          </button>
        </div>
        <div className="card-body text-dark">
          <button
            onClick={handleClick}
            className="btn btn-outline-dark w-100 rounded-pill"
            disabled={isLended}
          >
            {nftData.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
