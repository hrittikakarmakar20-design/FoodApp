import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import food1 from "../../assets/menu/menu1.png";
import food2 from "../../assets/menu/menu2.png";
import food3 from "../../assets/menu/menu3.png";

import { useState } from "react";
import MenuCard from "../../components/MenuCard";

const initialData = [
  {
    image: food1,
    title: "Chicken",
    rating: 5,
    price: "250",
    catagory: "Indian",
  },
  {
    image: food2,
    title: "Fried Rice",
    rating: 3,
    price: "99",
    catagory: "Mexican",
  },
  {
    image: food3,
    title: "Chicken Burger",
    rating: 4,
    price: "175",
    catagory: "Italian",
  },
];

const Alsolike = () => {
  const [cardData] = useState(initialData);

  return (
    <Box sx={{ backgroundColor: "#0A1316" }}>
      <Container>
        <Typography variant="h2" p={3}>
          You Might Also Like
        </Typography>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={3}>
            {cardData.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Paper
                  elevation={1}
                  sx={{ height: "100%", backgroundColor: "#121A1D" }}
                >
                  <MenuCard card={card} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Alsolike;
