import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/icons/Logo.svg?react";
import Container from "../Container/Container";
import MobileMenu from "../MobileMenu/MobileMenu";
import { RxHamburgerMenu as Burger} from 'react-icons/rx';
import { Button } from "@mui/material";
import styles from "./Header.module.scss";

const MOBILE_BREAKPOINT = 1024;

function Header() {
  const [mobileView, setMobileView] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setMobileView(window.innerWidth);

    const handleResize = () => {
      setMobileView(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderBody}>
          <div className={styles.HeaderNavigation}>
            <Link to="/" className='Logo'>
              <Logo />
              <span>eatly</span>
            </Link>
            {mobileView >= MOBILE_BREAKPOINT && <Navbar />}
          </div>

          <div className={styles.HeaderButtons}>
            {mobileView <= MOBILE_BREAKPOINT ? (
              <Burger size={30} onClick={handleMenuOpen} />
            ) : (
              <>
                <Button variant="text" color="secondary" sx={{ px: 20, py: 12 }} >Login</Button>
                <Button variant="contained" color="primary" sx={{ px: 20, py: 12 }} >Sing up</Button>
              </>
            )}
          </div>
        </div>
      </Container>

      {isMenuOpen &&
        createPortal(<MobileMenu onClose={handleMenuOpen} />, document.body)}
    </header>
  );
}

export default Header;
