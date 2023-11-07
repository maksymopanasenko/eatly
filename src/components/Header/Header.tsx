import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import Logo from "../../assets/icons/Logo.svg?react";
import Container from "../Container/Container";
import Burger from "./icons/menu.svg?react";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";

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
              <Burger onClick={handleMenuOpen} />
            ) : (
              <>
                <Button style={{ backgroundColor: "unset", color: "#606060" }}>
                  Login
                </Button>
                <Button
                  style={{ backgroundColor: "#6C5FBC", color: "#F9F9F9" }}
                >
                  Sing up
                </Button>
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
