import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles, { layout } from "../style";

const rowsData = [
  {
    pair: "Gold",
    price: "$67,731.47",
    change24h: "2.00%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/BTCUSDT",
    marketCap: "$1.33 T",
  },
  {
    pair: "Silver",
    price: "$3,331.83",
    change24h: "2.83%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/ETHUSDT",
    marketCap: "$401 B",
  },
  {
    pair: "Real Estate",
    price: "$580.50",
    change24h: "0.57%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/BNBUSDT",
    marketCap: "$89.4 B",
  },
  {
    pair: "Oil",
    price: "$175.47",
    change24h: "3.64%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/SOLUSDT",
    marketCap: "$78.3 B",
  },
  {
    pair: "Gold",
    price: "$67,731.47",
    change24h: "2.00%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/BTCUSDT",
    marketCap: "$1.33 T",
  },
  {
    pair: "Silver",
    price: "$3,331.83",
    change24h: "2.83%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/ETHUSDT",
    marketCap: "$401 B",
  },
  {
    pair: "Real Estate",
    price: "$580.50",
    change24h: "0.57%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/BNBUSDT",
    marketCap: "$89.4 B",
  },
  {
    pair: "Oil",
    price: "$175.47",
    change24h: "3.64%",
    chart: "https://api.dex-trade.com/api/default/short-pair-graph/SOLUSDT",
    marketCap: "$78.3 B",
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div>
          <br />
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mt-[-10px]"
            style={{
              animationName: "slideIn",
              animationDuration: "1s",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            RWA Market <span className="text-gradient">Overview</span>
          </h1>

          <br />

          <Paper sx={{ width: "100%", backgroundColor: "transparent" }}>
            <TableContainer
              sx={{
                maxHeight: 440,
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "transparent" }}>
                    <TableCell
                      sx={{ color: "black", backgroundColor: "white" }}
                    >
                      RWA
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", backgroundColor: "white" }}
                    >
                      Price
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", backgroundColor: "white" }}
                    >
                      24h Change
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", backgroundColor: "white" }}
                    >
                      Charts
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", backgroundColor: "white" }}
                    >
                      Market Cap
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:hover": {
                          transform: "scale(1.1)", // Adjust the scale factor as needed
                          transformOrigin: "center", // Set the transformation origin to the center

                          transition: "transform 0.3s ease-in-out", // Adjust the transition duration as needed
                        },
                      }}
                    >
                      <TableCell sx={{ color: "white" }}>{row.pair}</TableCell>
                      <TableCell sx={{ color: "white" }}>{row.price}</TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {row.change24h}
                      </TableCell>
                      <TableCell>
                        <img
                          alt={`graph for ${row.pair}`}
                          className="market-graph"
                          src={row.chart}
                        />
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {row.marketCap}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </div>
  );
}
