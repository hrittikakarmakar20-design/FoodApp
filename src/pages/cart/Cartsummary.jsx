import {
  Box,
  Container,
  Typography,
  Divider,
  InputBase,
  Button,
} from "@mui/material";
import CartCard from "../../components/CartCard";
import CartContext from "../../hooks/context/cart/CreatecartContext";
import { useContext, useMemo } from "react";

const Cartsummary = () => {
  const { cart } = useContext(CartContext);

  const { totalItems, subtotal, shipping, tax, total } = useMemo(() => {
    const parsePrice = (p) => Number(String(p).replace(/[^\d.]/g, "")) || 0;
    const safeQty = (q) => q ?? 1; // ✅ default to 1 if undefined/null

    const totalItems = cart.reduce(
      (sum, item) => sum + safeQty(item.quantity),
      0
    );

    const subtotal = cart.reduce(
      (sum, item) => sum + parsePrice(item.price) * safeQty(item.quantity),
      0
    );

    const shipping = subtotal > 500 ? 0 : subtotal > 0 ? 50 : 0;
    const tax = 0; // plug tax logic here if needed
    const total = subtotal + shipping + tax;

    return { totalItems, subtotal, shipping, tax, total };
  }, [cart]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      {/* Left: Cart Items */}
      <Container sx={{ py: 1, width: "35.75rem" }}>
        {cart.length > 0 ? (
          cart.map((item) => <CartCard key={item.id} item={item} />)
        ) : (
          <Typography
            variant="h6"
            sx={{ color: "#999", textAlign: "center", mt: 5 }}
          >
            Your cart is empty 🛒
          </Typography>
        )}
      </Container>

      {/* Right: Order Summary */}
      <Box
        sx={{
          maxWidth: 340,
          mx: "auto",
          p: 3,
          color: "#fff",
          mt: 4,
          backgroundColor: "#182225",
          borderRadius: "1rem",
          boxShadow: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Order Summary
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Items</Typography>
          <Typography>{totalItems}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Subtotal</Typography>
          <Typography sx={{ color: "#f7b94b" }}>
            Rs. {subtotal.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Shipping</Typography>
          <Typography sx={{ color: "#f7b94b" }}>
            Rs. {shipping.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Tax</Typography>
          <Typography sx={{ color: "#f7b94b" }}>
            Rs. {tax.toFixed(2)}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#434743", mt: 1, mb: 1 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Total</Typography>
          <Typography sx={{ color: "#f7b94b", fontWeight: "bold" }}>
            Rs. {total.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <InputBase
            sx={{
              flex: 1,
              border: "1px solid #f7b94b",
              borderRadius: "8px",
              px: 2,
              py: 1,
              color: "#fff",
              background: "transparent",
              mr: 2,
            }}
            placeholder="Coupon Code"
          />
          <Button variant="contained" sx={{ color: "whitesmoke" }}>
            APPLY
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mb: 3 }}>
          Free Delivery above Rs. 500
        </Typography>
        <Button
          variant="contained"
          sx={{ color: "whitesmoke" }}
          disabled={cart.length === 0}
        >
          PROCEED TO CHECKOUT
        </Button>
      </Box>
    </Container>
  );
};

export default Cartsummary;
