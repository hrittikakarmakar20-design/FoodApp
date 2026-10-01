import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  // Logic from the original Breadcrumb component to get the current path
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log("pathnames: ", pathnames);

  // Helper function to capitalize the first letter of a string
  const capitalize = (s) => {
    if (typeof s !== "string" || !s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    // The new design from your Menuhome component is applied here
    <Box
      sx={{
        minHeight: { xs: "18.75rem", md: "21.25rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 4,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        sx={{
          color: "white",
          fontSize: { xs: "2.5rem", md: "3.75rem" },
        }}
      >
        {/* The "Home" link remains from the original component */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>

        {/* The dynamic part now uses the new styling */}
        {pathnames.length > 0 && (
          <Box component="span" sx={{ color: "#FF8C00" }}>
            {" / "}
            {capitalize(pathnames[pathnames.length - 1])}
          </Box>
        )}
      </Typography>

      {/* The description paragraph also uses the new styling */}
      <Typography
        variant="body1"
        sx={{
          color: "grey.400",
          mt: 2,
          maxWidth: "65ch",
          lineHeight: 1.7,
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Dolor sit vitae nunc varius.
        Facilisis eget cras sit enim. Turpis aliquet ac eu donec ut. Sagittis
        vestibulum at quis non massa netus.
      </Typography>
    </Box>
  );
};

export default Breadcrumb;
