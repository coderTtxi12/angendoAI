import react from "react";
import { Box, Button, Typography } from "@mui/material";

function CallToActionSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f3f7fa", // a light background
        py: 6,
      }}
    >
      {/* -- ABSTRACT SHAPES -- */}

      {/* Large circle #1 (left) */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-50px", md: "-80px" },
          left: { xs: "-100px", md: "-150px" },
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          backgroundColor: "#ff6bd6", // pinkish
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Overlapping shape #2 (center-left) */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "30%", md: "20%" },
          left: { xs: "-50px", md: "10%" },
          width: { xs: 180, md: 250 },
          height: { xs: 180, md: 250 },
          borderRadius: "35% 65% 55% 45% / 45% 35% 65% 55%",
          backgroundColor: "#776bff", // purple
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Large circle #3 (right) */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-60px", md: "-100px" },
          right: { xs: "-60px", md: "-120px" },
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          backgroundColor: "#00b2ff", // bright blue
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Overlapping shape #4 (right-center) */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "40%" },
          right: { xs: "-30px", md: "10%" },
          width: { xs: 180, md: 250 },
          height: { xs: 180, md: 250 },
          borderRadius: "40% 60% 70% 30% / 50% 35% 65% 50%",
          backgroundColor: "#2676ff", // deeper blue
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* -- MAIN CONTENT -- */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1, // ensure content is above shapes
          textAlign: "center",
          maxWidth: 800,
          px: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Power up your scheduling
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
          Get started in seconds – for free.
        </Typography>

        <Box sx={{ display: "inline-flex", gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Sign up for free
          </Button>
      
        </Box>
      </Box>
    </Box>
  );
}

export default CallToActionSection;
