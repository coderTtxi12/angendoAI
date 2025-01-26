import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import benefit1 from "../../../assets/images/benefit1.jpg";
import benefit2 from "../../../assets/images/benefit2.jpg";

function BenefitsDesktopSection(props) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/*
        Layout for desktop
      */}

      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ mb: { xs: 4, md: 8 } }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              mb: 1,
              display: "block",
              textAlign: {
                xs: "center", // Center on small screens
                sm: "left", // Left-align on larger screens
              },
            }}
          >
            FORMS, QUIZZES, AND SURVEY
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: {
                xs: "center", // Center on small screens
                sm: "left", // Left-align on larger screens
              },
            }}
          >
            Get up to 3.5x more data about them
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 3,
              textAlign: {
                xs: "center", // Center on small screens
                sm: "left", // Left-align on larger screens
              },
            }}
          >
            When your forms break the norm, more people fill them out. Think
            branded designs, video content, and relevant follow-up questions.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: 20, textTransform: "none" }}
          >
            Sign up
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={benefit1}
            alt="Benefit 1"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>

      {/*
      Block 2
      */}

      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ mb: { xs: 4, md: 8 } }}
      >
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            component="img"
            src={benefit2}
            alt="Benefit 2"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              mb: 1,
              display: "block",
              textAlign: {
                xs: "center", // Center on small screens
                sm: "left", // Left-align on larger screens
              },
            }}
          >
            CUSTOMER INTELLIGENCE
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: {
                xs: "center", // Center on small screens
                sm: "left", // Left-align on larger screens
              },
            }}
          >
            Use that data to guide your next move
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 3,
              textAlign: {
                xs: "center", // Center on small screens
                sm: "left", // Left-align on larger screens
              },
            }}
          >
            What led customers to you. Their opinions. How they decide what to
            buy. Data can tell you a lot and our AI analysis can help you make
            sense of it all.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: 20, textTransform: "none" }}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BenefitsDesktopSection;
