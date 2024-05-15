"use client";
import Cards from "@/components/Card";
import React from "react";

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import useFetch from "@/hooks/useFetch";
import { api } from "@/config";

const WorkOrderStatus = () => {
  const { data: dataWorkStatus, loading }: any = useFetch(api.workOrderStatus);
  console.log({ dataWorkStatus });

  const data = [
    {
      value: dataWorkStatus ? dataWorkStatus[0]?.total : "",
      label: dataWorkStatus ? dataWorkStatus[0]?.status : "",
    },
    {
      value: dataWorkStatus ? dataWorkStatus[1]?.total : "",
      label: dataWorkStatus ? dataWorkStatus[1]?.status : "",
    },
    {
      value: dataWorkStatus ? dataWorkStatus[2]?.total : "",
      label: dataWorkStatus ? dataWorkStatus[2]?.status : "",
    },
  ];

  const size = {
    width: 500,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  const PieCenterLabel = ({ children }: { children: React.ReactNode }) => {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  };

  return (
    <Cards
      className="w-[30%]"
      title={<b>Work Order Status</b>}
      loading={loading}
      cardContent={
        (
          <PieChart
            sx={{ marginTop: 6 }}
            series={[{ data, innerRadius: 80 }]}
            {...size}
          >
            <PieCenterLabel>
              {dataWorkStatus ? dataWorkStatus[0]?.status : ""}{" "}
              {dataWorkStatus ? dataWorkStatus[0]?.total : ""}
            </PieCenterLabel>
          </PieChart>
        ) || null
      }
    />
  );
};

export default WorkOrderStatus;
