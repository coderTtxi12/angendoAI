import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import image from "../../../assets/images/image.jpg";

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        //Padding
        py: { xs: 6, md: 10 },
        px: { xs: 0, md: 4 },
      }}
    >
      <Grid container spacing={0} alignItems="center">
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={image}
            alt="Phone screenshot 1"
            sx={{
              width: "70%",
              borderRadius: 4,
              boxShadow: 3,
            }}
          />
        </Grid>

        {/* Text and form */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              textAlign: "left",
            }}
          >
            The future of <br /> money is here
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              textAlign: "left",
            }}
          >
            We're the most trusted place for people and businesses to buy, sell,
            and manage crypto.
          </Typography>

          {/* Form */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
          >
            <TextField
              type="email"
              placeholder="satoshi@nakamoto.com"
              variant="outlined"
              sx={{ flex: 1, minWidth: "220px" }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                minWidth: "120px",
                borderRadius: 20,
                textTransform: "none",
              }}
            >
              Generate
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
