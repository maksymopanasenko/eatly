import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../Logo/Logo";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Toolbar,
  useMediaQuery
} from "@mui/material";


function Header() {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 48,
            pb: 25
          }}
        >
          <Box
            width={590}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/" className='Logo'>
              <Logo />
            </Link>
            {!isMobile && <Navbar />}
          </Box>

          <Box display="flex" gap={10}>
            {isMobile ? (
              <MobileMenu />
            ) : (
              <>
                <Button
                  variant="text"
                  color="secondary"
                  sx={{ px: 20, py: 12 }}
                >Login</Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ px: 20, py: 12 }}
                >Sing up</Button>
              </>
            )}
          </Box>
        </Toolbar>
        <Divider />
      </Container>
    </AppBar>
  );
}

export default Header;
