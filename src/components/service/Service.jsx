import { useServiceStyle } from "@/assets/stylesheet/serviceStylesheet";
import { Box, Container, Grid, Typography } from "@mui/material";
import ServiceBox from "./ServiceBox";
import img1 from "@/assets/images/service/1.png";
import img2 from "@/assets/images/service/2.png";
import img3 from "@/assets/images/service/3.png";
import img4 from "@/assets/images/service/4.png";
import img5 from "@/assets/images/service/5.png";
import img6 from "@/assets/images/service/6.png";

const Service = () => {
  const classes = useServiceStyle();
  return (
    <Box className={classes.root} id="service">
      <Container>
        <Box className="content-box">
          <Typography component={"h2"}>Our Services</Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item md={4} sm={4} xs={12}>
            <ServiceBox title="House Cleaning" link="#" image={img1.src} />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <ServiceBox title="Carpet Cleaning" link="#" image={img2.src} />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <ServiceBox title="Kitchen Cleaning" link="#" image={img3.src} />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <ServiceBox title="Office Cleaning" link="#" image={img4.src} />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <ServiceBox title="Window Cleaning" link="#" image={img5.src} />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <ServiceBox title="Water Tank Cleaning" link="#" image={img6.src} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
