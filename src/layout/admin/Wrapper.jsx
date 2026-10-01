
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Wrapper = () => {
   const [open, setOpen] = useState(false);
  return (
    <>
      <Box>
           {/* Navbar with menu button */}
           <Navbar onMenuClick={() => setOpen(true)} />
     
           {/* Sidebar */}
           <Sidebar open={open} onClose={() => setOpen(false)} />
     
           {/* Main Content */}
           <Box sx={{ mt: 8, p: 2 }}>
             <Outlet />
           </Box>
         </Box>
    </>
  );
};

export default Wrapper;
