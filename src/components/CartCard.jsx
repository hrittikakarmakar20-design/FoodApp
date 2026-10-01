import {
  Box,
  CardMedia,
  Container,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";

import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveTwoToneIcon from "@mui/icons-material/RemoveTwoTone";
import { useContext } from "react";
import CartContext from "../hooks/context/cart/CreatecartContext";

const CartCard = ({ item }) => {
  const { removeCart, increment, decrement } = useContext(CartContext);

  return (
    <Container sx={{ width: "35.75rem" }}>
      <Box
        key={item.id}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#182225",
          borderRadius: "1rem",
          mb: 3,
          p: 2,
          boxShadow: 2,
          color: "#fff",
        }}
      >
        <IconButton
          sx={{ alignSelf: "flex-start", color: "#fff" }}
          onClick={() => removeCart(item.id)}
          aria-label="remove item"
        >
          <CancelTwoToneIcon />
        </IconButton>

        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{
            borderRadius: "1rem",
            width: "8rem",
            height: "8rem",
            objectFit: "cover",
            mr: 3,
          }}
        />

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Paper
              elevation={2}
              sx={{
                px: 1.5,
                py: 0.5,
                display: "flex",
                alignItems: "center",
                background: "#223137",
              }}
            >
              <IconButton
                aria-label="decrement quantity"
                onClick={() => decrement(item.id)}
                sx={{ color: "#fff" }}
                size="small"
              >
                <RemoveTwoToneIcon sx={{ fontSize: 20 }} />
              </IconButton>

              <Typography sx={{ px: 1, minWidth: 28, textAlign: "center" }}>
                 {item.quantity || 0}
              </Typography>

              <IconButton
                aria-label="increment quantity"
                onClick={() => increment(item.id)}
                sx={{ color: "#fff" }}
                size="small"
              >
                <AddTwoToneIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Paper>
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{ ml: 3, fontWeight: "medium", color: "#f7b94b" }}
        >
          {item.price}
        </Typography>
      </Box>
    </Container>
  );
};

export default CartCard;
