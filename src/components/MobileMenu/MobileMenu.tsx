import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { RxHamburgerMenu as Burger } from 'react-icons/rx';
import { Box, Drawer, IconButton } from "@mui/material";


function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <Burger size={30} color="#282828" />
      </IconButton>
      <Drawer anchor="top" open={open} onClose={handleClick} >
        <Box bgcolor="primary.main" px={10}>
          <Navbar isMobile onClose={handleClick} />
        </Box>
      </Drawer>
    </>

  );
}

export default MobileMenu;
