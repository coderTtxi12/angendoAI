import React from "react";

import { Box, Typography, Link, Divider } from "@mui/material";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#fff",
        color: "text.primary",
        mt: 4,
        pt: 4,
        pb: 2,
      }}
    >
      {/* Top Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",

          mb: 3,
        }}
      >
        {/* Logo + short description */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/* Logo or brand name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Example: an <img> or your brand icon */}
            <Box
              component="img"
              src="/your-logo.png"
              alt="Logo"
              sx={{ height: 32, width: "auto" }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              agendo
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Your personal GTM research agents.
          </Typography>
        </Box>

        {/* Links (right side) */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link
            href="/how-it-works"
            underline="none"
            sx={{ color: "text.primary" }}
          >
            How it works
          </Link>
          <Link href="/privacy" underline="none" sx={{ color: "text.primary" }}>
            Privacy
          </Link>
          <Link href="/terms" underline="none" sx={{ color: "text.primary" }}>
            Terms
          </Link>
        </Box>
      </Box>

      <Divider />

      {/* Bottom Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 2,
        }}
      >
        {/* Copyright */}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © {getCurrentYear()} <strong>agendo</strong>. All Rights Reserved
        </Typography>

        {/* Social links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link
            href="https://www.linkedin.com/"
            underline="none"
            sx={{ color: "text.primary" }}
            target="_blank"
            rel="noopener"
          >
            Linkedin
          </Link>
          <Link
            href="https://twitter.com/"
            underline="none"
            sx={{ color: "text.primary" }}
            target="_blank"
            rel="noopener"
          >
            X
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
