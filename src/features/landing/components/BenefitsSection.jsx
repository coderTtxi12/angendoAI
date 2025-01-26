// BenefitsSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import BenefitsMobileSection from "./BenefitsMobileSection";
import BenefitsDesktopSection from "./BenefitsDesktopSection";
import benefitsDb from "../data/landingDb";

function BenefitsSection() {
  return (
    <>
      {/* Desktop version: hidden on small screens */}

      <Box
        component="section"
        sx={{
          py: { md: 10 },
          px: { md: 4 },
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 0,
            textAlign: "center",
          }}
        >
          Typeform helps you understand customers
        </Typography>

        <BenefitsDesktopSection></BenefitsDesktopSection>
      </Box>




      {/* Mobile version: shown only on small screens */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Typography
          variant="h4"
          sx={{
            mb: 0,
            textAlign: "center",
          }}
        >
          Typeform helps you understand customers
        </Typography>
        {benefitsDb.map((benefit) => {
          return (
            <BenefitsMobileSection
              key={benefit.id}
              id={benefit.id}
              title={benefit.title}
              subtitle={benefit.subtitle}
              image={benefit.image}
              alt={benefit.alt}
              description={benefit.description}
            />
          );
        })}
      </Box>
    </>
  );
}

export default BenefitsSection;
