import { useTestimonialStyle } from "@/assets/stylesheet/testimonialStylesheet";
import { Box, Container, Grid, Typography } from "@mui/material";
import CallForQuote from "../call-for-quote/CallForQuote";
import testiImg from "@/assets/images/testimonial.png"

const Testimonial = () => {
  const classes = useTestimonialStyle();
  return (
    <Box className={classes.root}>
      <Container>
        <CallForQuote
          title="Call For A Free Quote"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
          number="+012-345-677-890"
        />
        <Box className="testimonial">
          <Grid container spacing={3}>
            <Grid item md={6} sm={6} xs={12}>
              <Box className="content">
                <Typography>TESTIMONIALS</Typography>
                <Typography component="h2">WHAT PEOPLE SAY
ABOUT US</Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <img src={testiImg.src} alt="image" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
