import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./styles.css";

export default function SelectDays({ days, handleDaysChange }) {

  
  return (
    <div className="select-days">
      <p>Price change in </p>
      <Select
        sx={{   height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& :hover": {
          "&& fieldSet": {
            borderColor: "#3a80e9",
          },
        }, }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        onChange={handleDaysChange}
      >
        <MenuItem value={7} className="toggle-btn">
          7 Days
        </MenuItem>
        <MenuItem value={20} className="toggle-btn">
          20 Days
        </MenuItem>
        <MenuItem value={30} className="toggle-btn">
          30 Days
        </MenuItem>
        <MenuItem value={60} className="toggle-btn">
          60 Days
        </MenuItem>
        <MenuItem value={180} className="toggle-btn">
          180 Days
        </MenuItem>
        <MenuItem value={365} className="toggle-btn">
          1 Years
        </MenuItem>
      </Select>
    </div>
  );
}
