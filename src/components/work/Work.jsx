import img1 from "@/assets/images/icon/1.png";
import img2 from "@/assets/images/icon/2.png";
import img3 from "@/assets/images/icon/3.png";
import img4 from "@/assets/images/icon/4.png";
import { useWorkStyle } from "@/assets/stylesheet/workStylesheet";
import { Box, Container, Grid, Typography } from "@mui/material";
import WorkCard from "./WorkCard";

const Work = () => {
  const classes = useWorkStyle();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={3} alignItems={"center"}>
          <Grid item md={4} sm={4} xs={12}>
            <Box className="work-box">
              <Typography component={"h2"}>HOW IT WORKS</Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </Typography>
            </Box>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <Grid container spacing={3}>
              <Grid item md={6} sm={6} xs={12}>
                <WorkCard
                  title="Choose a Service"
                  description="Lorem Ipsum is simply dummy text of the printing and typese tting industry. Lorem Ipsum has been the industry's standard dummy text."
                  icon={img1.src}
                  number={1}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <WorkCard
                  title="Team Arrives"
                  description="Lorem Ipsum is simply dummy text of the printing and typese tting industry. Lorem Ipsum has been the industry's standard dummy text."
                  icon={img2.src}
                  number={2}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <WorkCard
                  title="Cleaning Process"
                  description="Lorem Ipsum is simply dummy text of the printing and typese tting industry. Lorem Ipsum has been the industry's standard dummy text."
                  icon={img3.src}
                  number={3}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <WorkCard
                  title="Satisfaction"
                  description="Lorem Ipsum is simply dummy text of the printing and typese tting industry. Lorem Ipsum has been the industry's standard dummy text."
                  icon={img4.src}
                  number={4}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
