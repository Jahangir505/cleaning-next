import { useHeroStyle } from "@/assets/stylesheet/heroStyle";
import { Box, Container, Grid, Typography } from "@mui/material";

const Hero = () => {
  const classes = useHeroStyle();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Box className="left-content">
              <Typography>Professional Your </Typography>{" "}
              <Box className="img1">
                <Typography>Home</Typography>
                <Box className="img-box" />
                <Typography>Cleaning</Typography>
              </Box>
              <Box className="img2">
                <Typography> Services</Typography>
                <Box className="img-box2" />
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
