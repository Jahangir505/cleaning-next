import img4 from "@/assets/images/icon/1.png";
import img2 from "@/assets/images/icon/2.png";
import img3 from "@/assets/images/icon/3.png";
import img1 from "@/assets/images/statistics/1.png";
import { useStatisticsStyle } from "@/assets/stylesheet/statisticsStylesheet";
import { Box, Container, Grid } from "@mui/material";
import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
  const classes = useStatisticsStyle();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={3} alignItems={"center"}>
          <Grid
            item
            md={5}
            sm={4}
            xs={12}
            sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <StatisticsCard title="Project Done" number={120} icon={img4.src} />
            <StatisticsCard
              title="Happy Clients"
              number={500}
              icon={img2.src}
            />
            <StatisticsCard title="Team Member" number={50} icon={img3.src} />
          </Grid>
          <Grid item md={7} sm={8} xs={12}>
            <Box className="img-box">
              <img src={img1.src} alt="Image" />
              <Box className="play-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="102"
                  height="102"
                  viewBox="0 0 102 102"
                  fill="none"
                >
                  <circle cx="50.978" cy="50.9999" r="50.4035" fill="white" />
                  <path
                    d="M70.0877 45.8039C74.0877 48.1133 74.0877 53.8868 70.0877 56.1962L45.9232 70.1476C41.9232 72.457 36.9232 69.5702 36.9232 64.9514L36.9232 37.0487C36.9232 32.4299 41.9232 29.5431 45.9232 31.8525L70.0877 45.8039Z"
                    fill="#0062D3"
                  />
                </svg>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Statistics;
