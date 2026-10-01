import React from 'react'

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        <ListItem button component={Link} to="/admin/product" onClick={onClose}>
          <ListItemText primary="Product List" />
        </ListItem>

        <ListItem button component={Link} to="/admin/product/add" onClick={onClose}>
          <ListItemText primary="Add Product" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar