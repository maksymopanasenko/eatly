import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import Logo from "./icons/Logo.svg?react";
import Container from "../Container/Container";
import Burger from "./icons/menu.svg?react";
import Button from "../Button/Button";

const MOBILE_BREAKPOINT = 768;

function Header() {
  const [mobileView, setMobileView] = useState(window.innerWidth);

  useEffect(() => {
    // only for development
    setMobileView(window.innerWidth);

    const handleResize = () => {
      setMobileView(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // only for development
  }, []);

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderBody}>
          <div className={styles.HeaderNavigation}>
            <Link to="/" className={styles.HeaderLogo}>
              <Logo />
              <span>eatly</span>
            </Link>
            <Navbar />
          </div>

          <div className={styles.HeaderButtons}>
            {mobileView <= MOBILE_BREAKPOINT ? (
              <Burger />
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
    </header>
  );
}

export default Header;
