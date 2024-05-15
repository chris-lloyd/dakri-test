import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type customTableType = {
  row?: any;
  columns?: GridColDef[];
};

export default function CustomTable({
  row = [],
  columns = [],
}: customTableType) {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        sx={{ height: 300 }}
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={[3]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
