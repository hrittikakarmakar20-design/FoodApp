import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const iconStyles = {
  color: "#ffffff",
  cursor: "pointer",
  background: "#182F31",
  width: "auto",
  height: "2.5rem",
  borderRadius: "50%", 
  padding: "0.75rem",
};

const ChefCard = ({ chef }) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        borderRadius: "1rem",
        backgroundColor: "#121A1D",
        color: "white",
        textAlign: "center",
        p: 2,
        margin: "auto",
      }}
    >
      <CardMedia
        component="img"
        image={chef.image}
        alt={chef.name}
        sx={{
          borderRadius: "1rem",
          width: "100%",
          height: 250,
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", mt: 1 }}
        >
          {chef.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
          {chef.chefRole}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <FacebookRoundedIcon sx={iconStyles} />
          <XIcon sx={iconStyles} />
          <InstagramIcon sx={iconStyles} />
          <LinkedInIcon sx={iconStyles} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChefCard;