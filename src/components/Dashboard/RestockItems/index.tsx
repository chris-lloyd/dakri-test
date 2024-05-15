"use client";
import Cards from "@/components/Card";
import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import CustomTable from "@/components/CustomTable";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import useFetch from "@/hooks/useFetch";
import { api } from "@/config";
import { Box, Button, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const RestockItems = () => {
  const { data, loading } = useFetch(api.restockItems);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Work Order", width: 100 },

    {
      field: "toolEquipment",
      headerName: "Tool/Equipment",
      width: 200,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 200,
      renderCell: (dataRow: GridRenderCellParams) => {
        let indicator;

        switch (dataRow.row.status) {
          case "Low":
            indicator = "orange";
            break;
          case "None":
            indicator = "red";
            break;
          default:
            indicator = "orange";
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
      className="w-[35%]"
      title={
        <b>
          <BuildIcon /> Restock Items
        </b>
      }
      loading={loading}
      cardContent={<CustomTable row={data || []} columns={columns} /> || null}
    />
  );
};

export default RestockItems;
