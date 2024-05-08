import { useFooterStyle } from "@/assets/stylesheet/footerStylesheet";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import PlaceIcon from "@mui/icons-material/Place";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

const Footer = () => {
  const classes = useFooterStyle();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3} sm={4} xs={12}>
            <Box className="logo-box">
              <Box className="logo">
                <Logo />
                <Typography component="h5">Cleaning</Typography>
              </Box>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Box className="footer-menu">
              <Typography component="h4">Get In touch</Typography>
              <hr />
              <Box className="icon-list">
                <Box className="single">
                  <PlaceIcon />
                  <Typography>Dummy Address</Typography>
                </Box>
                <Box className="single">
                  <WifiCalling3Icon />
                  <Typography>+12-345-677-890</Typography>
                </Box>
                <Box className="single">
                  <MailIcon />
                  <Typography>dummy@gmail.com</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Box className="footer-menu">
              <Typography component="h4">Services</Typography>
              <hr />
              <Box className="s-list">
                <Box component={Link} href="">
                  House Cleaning
                </Box>
                <Box component={Link} href="">
                  House Cleaning
                </Box>
                <Box component={Link} href="">
                  House Cleaning
                </Box>
                <Box component={Link} href="">
                  House Cleaning
                </Box>
                <Box component={Link} href="">
                  House Cleaning
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Box className="footer-menu">
              <Typography component="h4">Opening hours</Typography>
              <hr />
              <Box className="time">
                <Box className="single-time">
                  <Typography>Saturday</Typography>
                  <Typography>9:00am-5:00pm</Typography>
                </Box>
                <Box className="single-time">
                  <Typography>Saturday</Typography>
                  <Typography>9:00am-5:00pm</Typography>
                </Box>
                <Box className="single-time">
                  <Typography>Saturday</Typography>
                  <Typography>9:00am-5:00pm</Typography>
                </Box>
                <Box className="single-time">
                  <Typography>Saturday</Typography>
                  <Typography>9:00am-5:00pm</Typography>
                </Box>
                <Box className="single-time">
                  <Typography>Saturday</Typography>
                  <Typography>9:00am-5:00pm</Typography>
                </Box>
                <Box className="single-time">
                  <Typography>Saturday</Typography>
                  <Typography>9:00am-5:00pm</Typography>
                </Box>
                <Box className="single-time">
                  <Typography>Saturday</Typography>
                  <Typography>9:00am-5:00pm</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
