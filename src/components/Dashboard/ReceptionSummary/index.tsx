"use client";
import Cards from "@/components/Card";
import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import InventoryIcon from "@mui/icons-material/Inventory";

const ReceptionSummary = () => {
  return (
    <Cards
      className="w-[60%]"
      title={
        <b>
          <BuildIcon /> Reception Summary
        </b>
      }
      cardContent={
        (
          <div className="flex flex-col w-full p-20 gap-4">
            <div className="flex flex-row w-full justify-between">
              <InventoryIcon sx={{ fontSize: 50 }} />
              <p style={{ fontSize: 40 }}>Packages Received</p>
              <p style={{ fontSize: 40 }}>10</p>
            </div>
            <div className="flex flex-row w-full justify-between">
              <InventoryIcon sx={{ fontSize: 50 }} />
              <p style={{ fontSize: 40 }}>Processed Packages</p>
              <p style={{ fontSize: 40 }}>5</p>
            </div>
          </div>
        ) || null
      }
    />
  );
};

export default ReceptionSummary;
