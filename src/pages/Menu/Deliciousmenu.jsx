import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MenuCard from "../../components/MenuCard";
import { useContext, useEffect, useMemo, useState } from "react";
import ProductContext from "../../hooks/context/product/ProductProvider";

const CATEGORY_OPTIONS = [
  "Indian",
  "Mexican",
  "Italian",
  "Chinese",
  "Japanese",
  "American",
  "Thai",
  "French",
];

const Deliciousmenu = () => {
  const { products, getProducts,} = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getProducts();
  }, []);

  const categories = ["All", ...CATEGORY_OPTIONS];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) => p.publish === true || p.publish === "true");
    if (selectedCategory === "All") return filtered;
    return filtered.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <>
      <Box sx={{ backgroundColor: "#0A1316" }}>
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
          <Typography variant="h2">Our Declicious Menu</Typography>
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

        <Box>
          <Stack direction="row" spacing={1} justifyContent="center">
            {categories.map((cat) => (
              <Button
                key={cat}
                color={selectedCategory === cat ? "primary" : "containedSecondary"}
                variant={selectedCategory === cat ? "contained" : "outlined"}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </Stack>
        </Box>

        <Container>
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((card) => (
                  <Grid item xs={4} key={card.id}>
                    <Paper
                      elevation={3}
                      sx={{ height: "100%", backgroundColor: "#121A1D" }}
                    >
                      <MenuCard card={card} />
                    </Paper>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography align="center" color="text.secondary">
                    {selectedCategory === "All"
                      ? "No products available."
                      : "No products found for this category."}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Deliciousmenu;
