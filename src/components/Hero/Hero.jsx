import { useHeroStyle } from "@/assets/stylesheet/heroStyle";
import { Box, Button, Grid, Typography } from "@mui/material";

const Hero = () => {
  const classes = useHeroStyle();
  return (
    <Box className={classes.root}>
      {/* <Container> */}
      <Grid container spacing={10} alignItems={"center"}>
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
              <Box className="video-box">
                <video
                  autoPlay
                  loop
                  muted
                  poster="https://assets.codepen.io/6093409/river.jpg"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Box>
          </Box>
          <Typography className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Typography>
          <Box className="button">
            <Button>Call Now</Button>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box className="booking-form">
            <Typography className="form-title">
              Get a Quote Instantly
            </Typography>
            <Typography className="sort-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </Typography>
            <form>
              <div className="input-group">
                <input type="email" placeholder="Type in here…" />
                <select name="" id="">
                  <option value="">How many room</option>
                </select>
              </div>
              <div className="input-group">
                <select name="" id="">
                  <option value="">Choose property</option>
                </select>
                <select name="" id="">
                  <option value="">Choose date schedule</option>
                </select>
              </div>
              <Button>Booking Now</Button>
            </form>
          </Box>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  );
};

export default Hero;
