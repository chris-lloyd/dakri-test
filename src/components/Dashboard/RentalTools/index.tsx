"use client";
import Cards from "@/components/Card";
import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import CustomTable from "@/components/CustomTable";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import useFetch from "@/hooks/useFetch";
import { api } from "@/config";
import { Avatar, Box, Button, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CircleIcon from "@mui/icons-material/Circle";

const RentalTools = () => {
  const { data, loading } = useFetch(api.rentalTools);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Work Order", width: 100 },

    {
      field: "toolRef",
      headerName: "Tool Ref",
      width: 200,
      sortable: false,
    },
    {
      field: "teamMember",
      headerName: "Team Member",
      sortable: false,
      width: 200,
      renderCell: (dataRow: GridRenderCellParams) => {
        return (
          <Box display="flex" alignItems="center" sx={{ marginTop: 1 }}>
            <Avatar alt="User Avatar" sx={{ width: 32, height: 32, mr: 2 }} />
            <Typography variant="body1">
              {dataRow?.row?.teamMember || ""}
            </Typography>
            <MilitaryTechIcon />
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 200,
      renderCell: (dataRow: GridRenderCellParams) => {
        let indicator;

        switch (dataRow.row.status) {
          case "Completed":
            indicator = "green";
            break;
          case "In Progress":
            indicator = "blue";
            break;
          case "Not Started":
            indicator = "red";
            break;
          default:
            indicator = "green";
        }

        return (
          <Box display="flex" alignItems="center" sx={{ marginTop: 1.5 }}>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {dataRow?.row?.status || ""}
            </Typography>
            <CircleIcon sx={{ color: indicator }} />
          </Box>
        );
      },
    },
    {
      field: "duration",
      headerName: "Duration",
      sortable: false,
      width: 200,
    },
    {
      field: "action",
      headerName: "",
      sortable: false,
      width: 200,
      hideable: true,
      renderCell: (dataRow: GridRenderCellParams) => {
        return (
          <>
            <Button variant="contained">Details</Button>
          </>
        );
      },
    },
  ];

  return (
    <Cards
      className="w-[65%]"
      title={
        <b>
          <BuildIcon /> Rental tools
        </b>
      }
      loading={loading}
      cardContent={<CustomTable row={data || []} columns={columns} /> || null}
    />
  );
};

export default RentalTools;
