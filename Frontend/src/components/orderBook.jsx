import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "../style";

const orderBookData = [
  {
    price: 1200,
    size: 50,
    total: 60000,
    name: "Gold",
    change: "+1.2%",
    time: "10:00 AM",
  },
  {
    price: 1190,
    size: 100,
    total: 119000,
    name: "Silver",
    change: "-0.5%",
    time: "10:05 AM",
  },
  {
    price: 1180,
    size: 80,
    total: 94400,
    name: "Platinum",
    change: "+0.8%",
    time: "10:10 AM",
  },
  {
    price: 1170,
    size: 150,
    total: 175500,
    name: "Diamond",
    change: "-2.1%",
    time: "10:15 AM",
  },
  {
    price: 1160,
    size: 120,
    total: 139200,
    name: "Copper",
    change: "+1.5%",
    time: "10:20 AM",
  },
  {
    price: 1150,
    size: 200,
    total: 230000,
    name: "Bronze",
    change: "-0.3%",
    time: "10:25 AM",
  },
  {
    price: 1140,
    size: 90,
    total: 102600,
    name: "Nickel",
    change: "+0.7%",
    time: "10:30 AM",
  },
  {
    price: 1130,
    size: 180,
    total: 203400,
    name: "Palladium",
    change: "-1.8%",
    time: "10:35 AM",
  },
  {
    price: 1120,
    size: 70,
    total: 78400,
    name: "Rhodium",
    change: "+2.3%",
    time: "10:40 AM",
  },
  {
    price: 1110,
    size: 110,
    total: 122100,
    name: "Titanium",
    change: "-0.9%",
    time: "10:45 AM",
  },
  // Add more entries here...
  {
    price: 1100,
    size: 160,
    total: 176000,
    name: "Aluminum",
    change: "+0.2%",
    time: "10:50 AM",
  },
  {
    price: 1090,
    size: 130,
    total: 141700,
    name: "Steel",
    change: "-0.1%",
    time: "10:55 AM",
  },
  {
    price: 1080,
    size: 220,
    total: 237600,
    name: "Zinc",
    change: "+0.6%",
    time: "11:00 AM",
  },
  {
    price: 1070,
    size: 85,
    total: 90950,
    name: "Lead",
    change: "-0.4%",
    time: "11:05 AM",
  },
  {
    price: 1060,
    size: 190,
    total: 201400,
    name: "Iron",
    change: "+0.3%",
    time: "11:10 AM",
  },
  // Add more entries as needed...
];

export default function OrderBookTable() {
  return (
    <div className={`bg-primary w-full ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <h1
          className="flex-1 font-poppins font-semibold ss:text-[45px] text-[0px] text-white ss:leading-[100.8px] leading-[75px] mt-[-10px]"
          style={{
            animationName: "slideIn",
            animationDuration: "1s",
          }}
        >
          Order Book
        </h1>
        <Paper sx={{ width: "100%", backgroundColor: "transparent" }}>
          <TableContainer
            sx={{
              maxHeight: 440,
              overflowX: "auto",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "transparent" }}>
                  <TableCell sx={{ color: "black", backgroundColor: "white" }}>
                    RWA
                  </TableCell>
                  <TableCell sx={{ color: "black", backgroundColor: "white" }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ color: "black", backgroundColor: "white" }}>
                    Size
                  </TableCell>
                  <TableCell sx={{ color: "black", backgroundColor: "white" }}>
                    Total
                  </TableCell>
                  {/* <TableCell
                    sx={{ color: "black", backgroundColor: "white" }}
                  >
                    Change
                  </TableCell> */}
                  <TableCell sx={{ color: "black", backgroundColor: "white" }}>
                    Time
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderBookData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        transform: "scale(1.1)",
                        transformOrigin: "center",
                        transition: "transform 0.3s ease-in-out",
                      },
                    }}
                  >
                    <TableCell
                      sx={{ color: row.price >= 1150 ? "green" : "red" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{ color: row.price >= 1150 ? "green" : "red" }}
                    >
                      {row.price}
                    </TableCell>
                    <TableCell
                      sx={{ color: row.price >= 1150 ? "green" : "red" }}
                    >
                      {row.size}
                    </TableCell>
                    <TableCell
                      sx={{ color: row.price >= 1150 ? "green" : "red" }}
                    >
                      {row.total}
                    </TableCell>
                    {/* <TableCell sx={{ color: row.price >= 1150 ? 'green' : 'red', }}>{row.change}</TableCell> */}
                    <TableCell
                      sx={{ color: row.price >= 1150 ? "green" : "red" }}
                    >
                      {row.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}
