import React from "react";
import { Box, keyframes, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import { socialProofRow1Db, socialProofRow2Db } from "../data/landingDb";

// Keyframe animations (one moves left, the other moves right)

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

function SocialProofSection() {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 0, md: 4 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Title section for large screens */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 4 }}>
          What our customers say
        </Typography>
      </Box>

      {/* Title section for small screens */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
          What our customers say
        </Typography>
      </Box>

      {/* Left gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: { xs: "100px", md: "200px" },
          background: "linear-gradient(to right, white, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Right gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: { xs: "100px", md: "200px" },
          background: "linear-gradient(to left, white, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Row 1: left-moving */}

      <Box
        sx={{
          whiteSpace: "nowrap",
          display: "flex",
          // Making the row wide enough to repeat
          width: "200%",
          animation: `${scrollLeft} 20s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {socialProofRow1Db.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            comment={testimonial.comment}
            title={testimonial.title}
          />
        ))}
        {/* Duplicating the same row’s items so we can loop seamlessly */}
        {socialProofRow1Db.map((testimonial) => (
          <TestimonialCard
            key={`dup-${testimonial.id}`}
            name={testimonial.name}
            comment={testimonial.comment}
            title={testimonial.title}
          />
        ))}
      </Box>

      {/* Row 2: right-moving */}

      <Box
        sx={{
          mt: 4,
          whiteSpace: "nowrap",
          display: "flex",
          width: "200%",
          animation: `${scrollRight} 20s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {socialProofRow2Db.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            comment={testimonial.comment}
            title={testimonial.title}
          />
        ))}
        {socialProofRow2Db.map((testimonial) => (
          <TestimonialCard
            key={`dup-${testimonial.id}`}
            name={testimonial.name}
            comment={testimonial.comment}
            title={testimonial.title}
          />
        ))}
      </Box>
    </Box>
  );
}

export default SocialProofSection;
