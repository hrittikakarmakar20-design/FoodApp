import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  IconButton,
  Modal,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useContext, useState } from "react";
import CartContext from "../hooks/context/cart/CreatecartContext";
import Cookies from "js-cookie";
import LoginModal from "../pages/LoginModal";
import Wishlistcontext from "../hooks/context/wishlist/Wishlistcontext";
import Badge from "@mui/material/Badge";

import styled from "@emotion/styled";
const MenuCard = ({ card, handleRating }) => {
  const { addtoCart } = useContext(CartContext);
  const { addToWishlist } = useContext(Wishlistcontext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const loginData = Cookies.get("loginData");

  const handleWishlistClick = () => {
    if (loginData) {
      addToWishlist(card);

      setIsWishlisted(!isWishlisted);
    } else {
      handleOpen();
    }
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#121A1D",
        position: "relative",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="220"
          image={card.image}
          alt={card.title}
          sx={{ mt: "8px", borderRadius: "15px", p: 1 }}
        />

        <IconButton
          aria-label="add to favorites"
          onClick={handleWishlistClick}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "#121A1D",
            borderRadius: "50%",
            padding: "8px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}
          disabled={isWishlisted}
        >
          {isWishlisted ? (
            <FavoriteIcon sx={{ color: "#D68240" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "#D68240" }} />
          )}
        </IconButton>
      </Box>

      <CardContent>
        <Rating
          name={`star-rating-${card.id}`}
          value={card.rating}
          precision={0.5}
          onChange={(event, newValue) => handleRating(card.id, newValue)}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          sx={{
            color: "#FFD700",
            mb: 1,
          }}
        />

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: "#D68240" }}
        >
          {card.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#A0A0A0", minHeight: 60 }}>
          {card.description}
        </Typography>

        <StyledBadge badgeContent={card.category} color="secondary" sx={{padding: 1}} />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#D68240" }}
          >
            Rs.{card.price}
          </Typography>
          <IconButton
            aria-label="add to basket"
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #D68240",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            onClick={() => (loginData ? addtoCart(card) : handleOpen())}
          >
            <ShoppingBasketIcon />
          </IconButton>

          <Modal
            open={open}
            onClose={handleClose}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <LoginModal handleClose={handleClose} />
            </Box>
          </Modal>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
