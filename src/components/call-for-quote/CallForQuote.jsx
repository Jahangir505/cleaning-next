import { useCallForQuoteStyle } from "@/assets/stylesheet/callForQuoteStylesheet";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const CallForQuote = ({ title, desc, number }) => {
  const classes = useCallForQuoteStyle();
  return (
    <Container>
      <Box className={classes.root}>
        <Grid container>
          <Grid item md={6}>
            <Box className="left-side">
              <Typography className="title">{title}</Typography>
              <Typography className="desc">{desc}</Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className="right-side">
              <Box className="card">
              <Typography><LocalPhoneIcon/> {number}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CallForQuote;
