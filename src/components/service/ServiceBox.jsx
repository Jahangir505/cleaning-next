import { useServiceStyle } from "@/assets/stylesheet/serviceStylesheet";
import { Box, Typography } from "@mui/material";

const ServiceBox = ({ image, title, link }) => {
  const classes = useServiceStyle();
  return (
    <Box className={classes.serviceBox}>
      <img src={image} />
      <Box className="title">
        <Typography component={"h3"}>{title}</Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6.75 5.25L1.5 10.5"
            stroke="#333333"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.65574 1.56209L7.72442 1.64675C6.2155 1.78393 5.46105 1.85251 5.2835 2.34291C5.10595 2.8333 5.64163 3.36899 6.71299 4.44035L7.55965 5.287C8.63101 6.35837 9.1667 6.89405 9.65709 6.7165C10.1475 6.53895 10.2161 5.7845 10.3532 4.27559L10.4379 3.34426C10.5205 2.43574 10.5618 1.98148 10.2902 1.70984C10.0185 1.4382 9.56426 1.47949 8.65574 1.56209Z"
            stroke="#333333"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default ServiceBox;
