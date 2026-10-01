import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Badge, Container, IconButton, Link, Modal } from "@mui/material";
import imageUnion from "../assets/nav-basket.png";
import imageOodi from "../assets/oddi.png";
import imageF from "../assets/F.png";
import { useNavigate } from "react-router-dom";
import LoginModal from "../pages/LoginModal";
import Cookies from "js-cookie";
import CartContext from "../hooks/context/cart/CreatecartContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Wishlistcontext from "../hooks/context/wishlist/Wishlistcontext";
import AuthContext from "../hooks/context/Auth/CreateAuthContext";

const Navbar = () => {
  const menuJson = [
    { name: "Home", navLink: "/home" },
    { name: "Menu", navLink: "/menu" },
    { name: "About Us", navLink: "/about" },
    { name: "Chef", navLink: "/chef" },
    { name: "Blog", navLink: "/blog" },
    { name: "Contact", navLink: "/contact" },
  ];

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const user = Cookies.get("user");
  const { cart } = useContext(CartContext);
  const { favourite } = useContext(Wishlistcontext);
  const { user, logout } = useContext(AuthContext);

  // const handleLogout = () => {
  //   Cookies.remove("user");
  //   // Reload the page to ensure the navbar and all other components
  //   // reflect the logged-out state.
  //   window.location.reload();
  // };
  // console.log("jdsgyfuhwj", user);

  return (
    <Container>
      <header
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "1.25rem",
          padding: "0.5rem 3.125rem",
          margin: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {/* logo of the navbar */}
        <IconButton onClick={() => navigate("/")}>
          <img
            src={imageF}
            alt="flogo"
            style={{
              backgroundColor: "#D68240",
              padding: "0.5rem 0.5rem",
              borderRadius: "0.5rem",
            }}
          />
          <img src={imageOodi} alt="oodilogo" />
        </IconButton>

        {/* navbar menu  */}
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", gap: "1.5rem" }}>
            {menuJson.map((value, index) => {
              return (
                <Link
                  key={index}
                  variant="body2"
                  underline="none"
                  onClick={() => navigate(value.navLink)}
                  sx={{
                    cursor: "pointer",
                    padding: "0.3rem",
                    color: "white",
                    fontSize: "1.1rem",
                    position: "relative",
                    "&::before, &::after": {
                      content: '""',
                      position: "absolute",
                      width: "8px",
                      height: "8px",
                      border: "2px solid orange",
                      opacity: 0,
                      transition: "all 0.3s ease",
                    },
                    "&::before": {
                      top: 0,
                      left: 0,
                      borderRight: "none",
                      borderBottom: "none",
                    },
                    "&::after": {
                      bottom: 0,
                      right: 0,
                      borderLeft: "none",
                      borderTop: "none",
                    },
                    "&:hover::before, &:hover::after": {
                      opacity: 1,
                    },
                  }}
                >
                  {value.name}
                </Link>
              );
            })}
          </Box>
        </Toolbar>

        {/* login and icon */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Wishlist Icon */}
          <IconButton
            aria-label="go to wishlist"
            onClick={() => (user ? navigate("/wishlist") : handleOpen())}
          >
            <Badge
              badgeContent={user ? favourite?.length : 0}
              color="secondary"
            >
              <FavoriteBorderIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>

          {/* Cart Icon */}
          <IconButton
            aria-label="go to cart"
            onClick={() => (user ? navigate("/cart") : handleOpen())}
          >
            <Badge badgeContent={user ? cart?.length : 0} color="secondary">
              <Box
                component="img"
                src={imageUnion}
                alt="Cart"
                sx={{
                  width: "1.231rem",
                  height: "1.186rem",
                }}
              />
            </Badge>
          </IconButton>

          {/* Login/Logout Button */}
          {!user ? (
            <Button color="primary" variant="contained" onClick={handleOpen}>
              LOGIN
            </Button>
          ) : (
            <Button color="primary" variant="contained" onClick={logout}>
              LOGOUT
            </Button>
          )}
          {user?.email === "izzongamer@gmail.com" && (
            <Button color="primary" variant="contained" onClick={() => navigate("/admin/dashboard")}>
              Admin
            </Button>
          )}
        </Box>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <LoginModal handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

export default Navbar;
