import { Box, Typography } from "@mui/material";
import Breadcrumb from "../../layout/Breadcrumb";

const Menuhome = () => {
  return (
    // <Box
    //   sx={{
    //     minHeight: { xs: "18.75rem", md: "21.25rem" },
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     textAlign: "center",
    //     py: 4,
    //   }}
    // >
    //   <Typography
    //     variant="h2"
    //     component="h1"
    //     fontWeight="bold"
    //     sx={{
    //       color: "white",
    //       fontSize: { xs: "2.5rem", md: "3.75rem" },
    //     }}
    //   >
    //     Home{" "}
    //     <Box component="span" sx={{ color: "#FF8C00" }}>
    //       / Our Menu
    //     </Box>
    //   </Typography>

    //   <Typography
    //     variant="body1"
    //     sx={{
    //       color: "grey.400",
    //       mt: 2,
    //       maxWidth: "65ch",
    //       lineHeight: 1.7,
    //     }}
    //   >
    //     Lorem ipsum dolor sit amet consectetur. Dolor sit vitae nunc varius.
    //     Facilisis eget cras sit enim. Turpis aliquet ac eu donec ut. Sagittis
    //     vestibulum at quis non massa netus.
    //   </Typography>
    // </Box>
    <Breadcrumb />
  );
};

export default Menuhome;
