import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/icons/Logo.svg?react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Button, Container, Divider, useMediaQuery } from "@mui/material";
import styles from "./Header.module.scss";


function Header() {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <header className={styles.Header}>
      <Container maxWidth="lg">
        <div className={styles.HeaderBody}>
          <div className={styles.HeaderNavigation}>
            <Link to="/" className='Logo'>
              <Logo />
              <span>eatly</span>
            </Link>
            {!isMobile && <Navbar />}
          </div>

          <div className={styles.HeaderButtons}>
            {isMobile ? (
              <MobileMenu />
            ) : (
              <>
                <Button variant="text" color="secondary" sx={{ px: 20, py: 12 }} >Login</Button>
                <Button variant="contained" color="primary" sx={{ px: 20, py: 12 }} >Sing up</Button>
              </>
            )}
          </div>
        </div>
        <Divider color="#CBCBCB"/>
      </Container>
    </header>
  );
}

export default Header;
