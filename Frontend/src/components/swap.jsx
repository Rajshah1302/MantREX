import React, { useState } from "react";
import { assets } from "chain-registry";
import { Box, SwapToken } from "@interchain-ui/react";
import "@interchain-ui/react/styles";
const symbols = [
  "ATOM",
  "OSMO",
  "JUNO",
  "STARS",
  "BLD",
  "STRD",
  "CRO",
  "AKT",
  "MARS",
];

const RWA = [
    "Gold",
    "Silver",
    "Platinum",
    "Real Estate Investment Trust (REIT)",
    "Oil",
    "Natural Gas",
    "Farmland",
    "Commercial Real Estate",
    "Infrastructure Bonds"
  ];
  
  function mapSymbolToRWA(symbol) {
    const index = symbols.indexOf(symbol);
    if (index !== -1 && index < RWA.length) {
      return RWA[index];
    } else {
      return "RWA asset not found for symbol";
    }
  }
const noop = () => {};

const dropdownList = symbols.map((symbol) => {
  const asset = assets.find(
    (assetList) => assetList.assets[0].symbol === symbol
  ).assets[0];

  return {
    imgSrc:
      asset.logo_URIs?.png || asset.logo_URIs?.jpeg || asset.logo_URIs?.svg,
    name: mapSymbolToRWA(asset.name),
    tokenName: asset.symbol,
    symbol: asset.symbol,
    denom: asset.base,
    available: Number((Math.random() * 100).toFixed(6)),
    priceDisplayAmount: Math.floor(Math.random() * 10) + 1,
  };
});

function Swap() {
  const [from, setFrom] = useState({
    label: "From",
    options: dropdownList ?? [],
    selected: dropdownList[0],
    amount: 0,
    onItemSelected: (selectedItem) => {
      console.log("From: onItemSelected", selectedItem);
      setFrom((prev) => ({
        ...prev,
        selected: selectedItem,
        options: prev?.options ?? [],
        amount: prev?.amount ?? 0,
        label: prev?.label ?? "",
        onItemSelected: prev?.onItemSelected ?? noop,
        onAmountChange: prev?.onAmountChange ?? noop,
        onAmountInput: prev?.onAmountInput ?? noop,
      }));
    },
  });

  const [to, setTo] = useState({
    label: "To",
    options: dropdownList ?? [],
    selected: dropdownList[1],
    amount: 0,
    onItemSelected: (selectedItem) => {
      console.log("To: onItemSelected", selectedItem);
      setFrom((prev) => ({
        ...prev,
        selected: selectedItem,
        options: prev?.options ?? [],
        amount: prev?.amount ?? 0,
        label: prev?.label ?? "",
        onItemSelected: prev?.onItemSelected ?? noop,
        onAmountChange: prev?.onAmountChange ?? noop,
        onAmountInput: prev?.onAmountInput ?? noop,
      }));
    },
  });

  const onToggleDirection = () => {
    const prevTo = to;
    const prevFrom = from;

    setTo({ ...prevFrom, label: "To" });
    setFrom({ ...prevTo, label: "From" });
  };

  return (
    <div
      style={{
        background: "rgba(227, 61, 148,0.2)",
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        WebkitBackdropFilter: "blur(5px)", // Note: Use 'Webkit' prefix for Safari compatibility
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Box width="100%" className="p-5"style={{color:'white'}}>
        <SwapToken
          from={from}
          to={to}
          swapPrice={{
            hasRoute: true,
            priceImpact: "< 0.001%",
            swapFee: {
              percentage: "0.2%",
              value: "< $0.01",
            },
            routeDisabled: false,
            minimumReceived: 250.4,
          }}
          onToggleDirection={onToggleDirection}
          onSwap={() => {
            console.log("Swap");
          }}
          onToleranceChange={(percent) => {
            console.log("onToleranceChange", percent);
          }}
        />
      </Box>
    </div>
  );
}

export default Swap;
