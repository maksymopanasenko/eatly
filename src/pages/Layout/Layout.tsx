import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Header />
      <Box
        component="main"
        height="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
