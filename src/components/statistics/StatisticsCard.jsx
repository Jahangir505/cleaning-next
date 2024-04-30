import { useStatisticsStyle } from "@/assets/stylesheet/statisticsStylesheet";
import { Box, Grid, Typography } from "@mui/material";

const StatisticsCard = ({ icon, title, number }) => {
  const classes = useStatisticsStyle();
  return (
    <Box className={classes.statisticsCard}>
      <Grid container spacing={3} alignItems={"center"}>
        <Grid item md={4} sm={4} xs={12}>
          <Box className="icon">
            <img src={icon} alt={title} />
          </Box>
        </Grid>
        <Grid item md={8} sm={8} xs={12}>
          <Box sx={{ paddingLeft: "40px" }}>
            <Typography className="count">{number}+</Typography>
            <Typography className="title">{title}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsCard;
