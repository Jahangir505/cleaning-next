import blog1 from "@/assets/images/blog/blog1.png";
import blog2 from "@/assets/images/blog/blog2.png";
import blog3 from "@/assets/images/blog/blog3.png";
import { useBlogStyle } from "@/assets/stylesheet/blogStylesheet";
import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

const Blog = () => {
  const classes = useBlogStyle();
  return (
    <Box className={classes.root} id="blog">
      <Container>
        <Box className="blog-top">
          <Typography component={"h2"}>Get latest News & Updates</Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item md={4} sm={4} xs={12}>
            <BlogCard
              image={blog1.src}
              title={"Lorem ipsum dolor"}
              date="April 24, 2024"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <BlogCard
              image={blog2.src}
              title={"Lorem ipsum dolor"}
              date="April 24, 2024"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <BlogCard
              image={blog3.src}
              title={"Lorem ipsum dolor"}
              date="April 24, 2024"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
