"use client";
import Cards from "@/components/Card";
import React from "react";
import CustomTable from "@/components/CustomTable";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import useFetch from "@/hooks/useFetch";
import { api } from "@/config";
import { Avatar, Box, Button, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WarningIcon from "@mui/icons-material/Warning";

const MissingItems = () => {
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
      width: 300,
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
      field: "action",
      headerName: "",
      sortable: false,
      width: 200,
      hideable: true,
      renderCell: () => {
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
      className="w-[40%]"
      title={
        <b>
          <WarningIcon /> Missing Items
        </b>
      }
      loading={loading}
      cardContent={<CustomTable row={data || []} columns={columns} /> || null}
    />
  );
};

export default MissingItems;
