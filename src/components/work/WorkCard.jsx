import { useWorkStyle } from "@/assets/stylesheet/workStylesheet";
import { Box, Grid, Typography } from "@mui/material";

const WorkCard = ({ title, description, icon, number }) => {
  const classes = useWorkStyle();
  return (
    <Box className={classes.workCard}>
      <Grid container spacing={5}>
        <Grid item md={2} sm={2} xs={12}>
          <Box className="icon">
            <img src={icon} alt="icon" />
            <span className="number">{number}</span>
          </Box>
        </Grid>
        <Grid item md={10} sm={10} xs={12}>
          <Box className="content">
            <Typography component={"h3"}>{title}</Typography>
            <Typography>{description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkCard;
