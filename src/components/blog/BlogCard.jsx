import { useBlogStyle } from "@/assets/stylesheet/blogStylesheet";
import { Box, Typography } from "@mui/material";

const BlogCard = ({ image, title, date, desc }) => {
  const classes = useBlogStyle();
  return (
    <Box className={classes.blogCard}>
      <Box>
        <img src={image} alt={title} />
        <Box className="content">
          <Typography className="title">{title}</Typography>
          <Typography className="date">{date}</Typography>
          <Typography className="desc">{desc}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
