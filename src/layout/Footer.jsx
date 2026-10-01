
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FooterImage from "../assets/Footer/Rectangle691.png"; 
import Logo from "../assets/Logo.png"; 

const paymentIcons = [
  "https://img.icons8.com/color/48/000000/mastercard-logo.png",
  "https://img.icons8.com/color/48/000000/google-pay.png",
  "https://img.icons8.com/color/48/000000/visa.png",
  "https://img.icons8.com/color/48/000000/paypal.png",
];

const Footer = () => {
  const socialButtons = [
    { icon: <FacebookIcon fontSize="small" />, label: "Facebook" },
    { icon: <TwitterIcon fontSize="small" />, label: "Twitter" },
    { icon: <InstagramIcon fontSize="small" />, label: "Instagram" },
    { icon: <LinkedInIcon fontSize="small" />, label: "LinkedIn" },
  ];

  const userLinks = [
    "About Us",
    "Contact Us",
    "Order Delivery",
    "Payments & Tax",
    "Terms of Services",
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        color: "grey.500",
        overflow: "hidden",
        backgroundColor: "#1C1D1E",
        py: 6,
      }}
    >
      {/* Background Image Layer */}
      <Box
        component="img"
        src={FooterImage}
        alt="Footer background pattern"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: "80%",
        }}
      />

      {/* Container for all content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* TOP SECTION */}
        <Grid
          container
          spacing={4}
          justifyContent="space-between" // This pushes the left and right sections apart
          sx={{
            alignItems: "flex-start",
            pb: 4,
          }}
        >
          {/* LEFT SECTION */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={Logo}
              alt="Foodi Logo"
              sx={{ height: "40px", mb: 2 }}
            />
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                lineHeight: 1.7,
                maxWidth: "350px",
                color: "grey.400",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Tristique cursus morbi
              nibh nec et vulputate. Turpis tortor nisi imperdiet quis accumsan.
            </Typography>
            <Box>
              {socialButtons.map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  size="small"
                  sx={{
                    mr: 1.5,
                    border: "1px solid",
                    borderColor: "grey.800",
                    color: "grey.400",
                    "&:hover": {
                      backgroundColor: "rgba(255, 140, 0, 0.1)",
                      borderColor: "rgba(255, 140, 0, 0.5)",
                      color: "white",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Box display="flex" alignItems="center" mb={1.5}>
                  <MailOutlineIcon sx={{ mr: 1.5, fontSize: "1.1rem" }} />
                  <Typography variant="body2">infofoodi@gmail.com</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocalPhoneIcon sx={{ mr: 1.5, fontSize: "1.1rem" }} />
                  <Typography variant="body2">+917029112661</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  User Link
                </Typography>
                {userLinks.map((text) => (
                  <Link
                    href="#"
                    key={text}
                    variant="body2"
                    display="block"
                    color="inherit"
                    sx={{
                      mb: 1.5,
                      textDecoration: "none",
                      "&:hover": { color: "white" },
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
                  Location
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, display: "block" }}>
                  543 Country Club Ave, <br />
                  NC 27567, London, UK <br />
                  +1257 6541120
                </Typography>
                <Box>
                  {paymentIcons.map((iconUrl, index) => (
                    <img
                      key={index}
                      src={iconUrl}
                      alt="payment method"
                      style={{ marginRight: "10px", height: "24px" }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* --- DIVIDER --- */}
        <Divider sx={{ borderBottom: "1px dotted", borderColor: "grey.800" }} />

        {/* --- BOTTOM BAR --- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            pt: 2,
          }}
        >
          <Typography variant="body2" color="grey.600">
            ©2024 ARR. All right reserved
          </Typography>
          <Box>
            <Link
              href="#"
              variant="body2"
              color="grey.600"
              sx={{
                ml: 3,
                textDecoration: "none",
                "&:hover": { color: "white" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              color="grey.600"
              sx={{
                ml: 3,
                textDecoration: "none",
                "&:hover": { color: "white" },
              }}
            >
              Terms of Use
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
