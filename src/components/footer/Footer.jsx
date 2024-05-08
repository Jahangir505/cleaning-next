import { useFooterStyle } from "@/assets/stylesheet/footerStylesheet";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  const classes = useFooterStyle();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3} sm={4} xs={12}>
            <Box className="logo-box">
              <Box sx={{ display: { xs: "flex", md: "none" }, paddingRight: "10px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65491 36.9392 5.85786 34.1421C3.06081 31.3451 1.156 27.7814 0.384294 23.9018C-0.38741 20.0222 0.00865672 16.0009 1.52241 12.3463C3.03616 8.69181 5.59961 5.56824 8.8886 3.37061C12.1776 1.17298 16.0444 -4.71704e-08 20 0V16C19.2089 16 18.4355 16.2346 17.7777 16.6741C17.1199 17.1136 16.6072 17.7384 16.3045 18.4693C16.0017 19.2002 15.9225 20.0044 16.0769 20.7804C16.2312 21.5563 16.6122 22.269 17.1716 22.8284C17.731 23.3878 18.4437 23.7688 19.2196 23.9231C19.9956 24.0775 20.7998 23.9983 21.5307 23.6955C22.2616 23.3928 22.8864 22.8801 23.3259 22.2223C23.7654 21.5645 24 20.7911 24 20H40Z"
                    fill="#7755FF"
                  />
                  <path
                    d="M31.5441 20.1471C31.5441 26.4415 26.4415 31.5441 20.1471 31.5441C13.8526 31.5441 8.75 26.4415 8.75 20.1471C8.75 13.8526 13.8526 8.75 20.1471 8.75C26.4415 8.75 31.5441 13.8526 31.5441 20.1471Z"
                    fill="white"
                  />
                  <path
                    d="M26 20C26 23.3137 23.3137 26 20 26C16.6863 26 14 23.3137 14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20Z"
                    fill="#FFC448"
                  />
                </svg>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  Cleaning
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xs={12}></Grid>
          <Grid item md={3} sm={4} xs={12}></Grid>
          <Grid item md={3} sm={4} xs={12}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
