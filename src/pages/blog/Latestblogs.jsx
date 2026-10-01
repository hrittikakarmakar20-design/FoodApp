import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";
import blog1 from "../../assets/Blog/blog1.png";
import blog2 from "../../assets/Blog/blog2.png";
import blog3 from "../../assets/Blog/blog3.png";
import blog4 from "../../assets/Blog/blog4.png";
import blog5 from "../../assets/Blog/blog5.png";
import blog6 from "../../assets/Blog/blog6.png";

import BlogCard from "../../components/BlogCard";

const blogJson = [
  { title: "10 Benefits of Doing a Detox", image: blog1 },
  { title: "Fresh Snacks Morning", image: blog2 },
  { title: "10 Reasons You’ll Love Us", image: blog3 },
  { title: "New Restaurant in New Delhi", image: blog4 },
  { title: "Fresh Paneer Veg", image: blog5 },
  { title: "We have perfect Dish", image: blog6 },
];

const Latestblogs = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0A1316", p: 5 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 10,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Latest News & Blogs</Typography>
          <br />
          <Container>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              libero at quibusdam quod eos et, deserunt maiores possimus quas,
              nostrum cumque reprehenderit placeat eveniet, architecto dolor
              laboriosam velit repellat soluta.
            </Typography>
          </Container>
        </Container>

        <Container sx={{ marginBottom: "5rem"}}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {blogJson.map((chef) => {
              return (
                <>
                  <BlogCard chef={chef} />
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Latestblogs;
