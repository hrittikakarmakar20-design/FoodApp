import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FaComments } from "react-icons/fa";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ chef }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            maxWidth: "23.5rem",
            borderRadius: "1rem",
            backgroundColor: "#121A1D",
            color: "white",
            margin: "auto",
          }}
        >
          <CardMedia
            component="img"
            image={chef.image}
            alt={chef.title}
            sx={{
              borderRadius: "1rem",
              width: "100%",
              height: 250,
              objectFit: "cover",
              display: "block",
              p: 2,
              
            }}
          />
          <CardContent sx={{ textAlign: "start", p: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  color: "#ccc",
                }}
              >
                <PersonIcon sx={{ color: "orange", fontSize: "1rem" }} />
                Admin
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  color: "#ccc",
                }}
              >
                <CalendarMonthIcon sx={{ color: "orange", fontSize: "1rem" }} />
                17 June 2025
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  color: "#ccc",
                }}
              >
                <FaComments color="orange" style={{ fontSize: "0.9rem" }} />
                Comments
              </Typography>
            </Box>

            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                mt: 2,
              }}
            >
              {chef.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#ccc",
                mt: 1.5,
              }}
            >
              Savor our latest blog where we serve up delicious recipes, insider
              kitchen tips, and design inspirations that blend mouthwatering
              flavors with a delightful dining experience
            </Typography>
            
            <Link to="/single-blog" style={{ textDecoration: "none", display: "inline-block" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                  color: "whitesmoke",
                  fontWeight: "bold",
                  cursor: "pointer",
                  perspective: "1000px",

                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "orange",
                    "& .arrow-icon": {
                      transform: "rotateX(-180deg) rotateZ(-90deg) scale(1.1)",
                    },
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mr: 0.5 }}
                >
                  READ MORE
                </Typography>
                <ArrowForwardIosIcon
                  className="arrow-icon" // Added a class name for easier targeting
                  sx={{
                    fontSize: "0.8rem",
                    // preserve-3d ensures children are rendered in 3D space
                    transformStyle: "preserve-3d",
                    // Transition all transform properties smoothly
                    transition:
                      "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Smoother, spring-like curve
                    transform: "rotateX(0deg) rotateZ(0deg) scale(1)", // Initial state
                  }}
                />
              </Box>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default BlogCard;
