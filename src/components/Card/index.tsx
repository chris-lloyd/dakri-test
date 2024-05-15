"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

type cardType = {
  className?: string;
  cardContent?: React.ReactElement;
  title?: React.ReactElement;
  loading?: boolean;
};

const Cards = ({
  className = "",
  cardContent = <p>this is a card</p>,
  title = <p>title card</p>,
  loading = false,
}: cardType) => {
  return (
    <>
      <Card
        sx={{
          padding: "5px",
          border: "2px solid #eeeeee",
          borderRadius: "16px",
          marginRight: "10px",
          height: "380px",
        }}
        className={className}
      >
        <CardContent>
          {!loading ? (
            <>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              {cardContent}
            </>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="150px"
            >
              <CircularProgress />
            </Box>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
