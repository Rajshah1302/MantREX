import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const orderBookData = [
  { priceOM: 1200, priceUSD: 1440, sizeRWA: 50, time: "10:00 AM" },
  { priceOM: 1190, priceUSD: 1428, sizeRWA: 100, time: "10:05 AM" },
  { priceOM: 1180, priceUSD: 1416, sizeRWA: 80, time: "10:10 AM" },
  { priceOM: 1170, priceUSD: 1404, sizeRWA: 150, time: "10:15 AM" },
  { priceOM: 1160, priceUSD: 1392, sizeRWA: 120, time: "10:20 AM" },
  { priceOM: 1150, priceUSD: 1380, sizeRWA: 200, time: "10:25 AM" },
];

const OrderBookTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Price (OM)</TableCell>
            <TableCell>Price (USD)</TableCell>
            <TableCell>Size (RWA)</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderBookData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.priceOM}</TableCell>
              <TableCell>{row.priceUSD}</TableCell>
              <TableCell>{row.sizeRWA}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderBookTable;
