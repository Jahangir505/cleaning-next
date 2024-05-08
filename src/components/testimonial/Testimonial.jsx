import { useTestimonialStyle } from "@/assets/stylesheet/testimonialStylesheet";
import { Box, Container } from "@mui/material";
import CallForQuote from "../call-for-quote/CallForQuote";

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
        <Box></Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
