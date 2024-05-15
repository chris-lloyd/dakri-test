"use client";
import Cards from "@/components/Card";
import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress size={60} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const ToolEquipmentAvailable = () => {
  return (
    <Cards
      className="w-[55%]"
      title={
        <b>
          <BuildIcon /> Rental tools
        </b>
      }
      cardContent={
        (
          <div className="flex flex-col w-full p-20 gap-4">
            <div className="flex flex-row w-full justify-between">
              <BuildIcon sx={{ fontSize: 50 }} />
              <p style={{ fontSize: 40 }}>Rental Items</p>
              <CircularProgressWithLabel value={50} sx={{ color: "orange" }} />
            </div>
            <div className="flex flex-row w-full justify-between">
              <PendingActionsIcon sx={{ fontSize: 50 }} />
              <p style={{ fontSize: 40 }}>Spare Parts</p>
              <CircularProgressWithLabel value={75} sx={{ color: "green" }} />
            </div>
          </div>
        ) || null
      }
    />
  );
};

export default ToolEquipmentAvailable;
