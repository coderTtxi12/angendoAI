import React from "react";
import { Box, Typography } from "@mui/material";

function TestimonialCard(props) {
  return (
    <Box
      sx={{
        minWidth: 280,
        maxWidth: 300,
        minHeight: 150,
        p: 2,
        borderRadius: 2,
        outline: 0.1,
        bgcolor: "transparent",
        mr: 3, // spacing between cards
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 3
        }
      }}
    >
      {/* Message */}

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          display: "-webkit-box",
          WebkitLineClamp: 8,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textAlign: "left",
          textOverflow: "ellipsis",
          whiteSpace: "normal", 
          wordBreak: "break-word", 
          maxWidth: 300,
          mb: 3, 
        }}
      >
        {props.comment}
      </Typography>

      {/* Name */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 0 }}>
        <Typography sx={{ fontWeight: "bold" }}>{props.name}</Typography>
      </Box>

      {/* Title */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography variant="body2" sx={{ color: "text.secondary"}}>{props.title}</Typography>
      </Box>

    </Box>
  );
}

export default TestimonialCard;
